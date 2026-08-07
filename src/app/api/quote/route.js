import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value, max = 2000) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 40);
  const company = clean(body.company, 160);
  const project = clean(body.project, 5000);

  if (!fullName || !email || !company || !project) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    QUOTE_TO_EMAIL,
    QUOTE_FROM_EMAIL,
    QUOTE_FROM_NAME,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Quote API: missing SMTP env configuration");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT || 465);
  const secure =
    String(SMTP_SECURE ?? (port === 465 ? "true" : "false")).toLowerCase() ===
    "true";
  const to = QUOTE_TO_EMAIL || SMTP_USER;
  const fromEmail = QUOTE_FROM_EMAIL || SMTP_USER;
  const fromName = QUOTE_FROM_NAME || "Saqrih Website";

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Qatar",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const text = [
    "New Get a Quote request",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Company: ${company}`,
    "",
    "Project details:",
    project,
    "",
    `Submitted: ${submittedAt} (Asia/Qatar)`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;color:#162D24;max-width:640px">
      <h2 style="margin:0 0 12px;font-size:20px">New Get a Quote request</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9;width:120px"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Phone</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Company</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(company)}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;font-size:15px">Project details</h3>
      <p style="margin:0;white-space:pre-wrap;background:#f6f8f6;border:1px solid #e8ece9;border-radius:8px;padding:14px">${escapeHtml(project)}</p>
      <p style="margin:18px 0 0;font-size:12px;color:#667066">Submitted: ${escapeHtml(submittedAt)} (Asia/Qatar)</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      tls: {
        // Many cPanel hosts use shared certs / server hostname mismatch.
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      replyTo: `"${fullName}" <${email}>`,
      subject: `Quote request from ${fullName}${company ? ` (${company})` : ""}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote API: failed to send email", {
      code: err?.code,
      command: err?.command,
      response: err?.response,
      message: err?.message,
    });

    const code = String(err?.code || "");
    let hint =
      "Could not send your message. Please try again shortly.";
    if (code === "ETIMEDOUT" || code === "ESOCKET" || code === "ECONNECTION") {
      hint =
        "Mail server timed out. SMTP host/port is unreachable — use your cPanel server hostname, not just the domain.";
    } else if (code === "EAUTH") {
      hint = "SMTP login failed. Check the email username/password in .env.";
    }

    return NextResponse.json(
      {
        error: hint,
        ...(process.env.NODE_ENV !== "production"
          ? { debug: { code, message: err?.message } }
          : {}),
      },
      { status: 502 }
    );
  }
}
