import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactSubjectLabel, validateContactPayload } from "../../../../lib/contactValidation";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const rateMap = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    rateMap.set(ip, { start: now, count: 1 });
    return { ok: true };
  }
  if (entry.count >= RATE_MAX) {
    const retryAfterSec = Math.ceil((RATE_WINDOW_MS - (now - entry.start)) / 1000);
    return { ok: false, retryAfterSec };
  }
  entry.count += 1;
  return { ok: true };
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
  const ip = getClientIp(request);
  const rate = checkRateLimit(ip);
  if (!rate.ok) {
    return NextResponse.json(
      { error: "Too many messages. Please try again in a few minutes." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec || 900) },
      }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { ok, fieldErrors, values, isSpam } = validateContactPayload(body);

  if (isSpam) {
    return NextResponse.json({ ok: true });
  }

  if (!ok) {
    return NextResponse.json(
      { error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  const { fullName, email, phone, company, subject, message } = values;
  const subjectLabel = contactSubjectLabel(subject);

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
    console.error("Contact API: missing SMTP env configuration");
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
    "Contact form",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Company: ${company || "—"}`,
    `Inquiry: ${subjectLabel}`,
    "",
    "Message:",
    message,
    "",
    `Submitted: ${submittedAt} (Asia/Qatar)`,
    `IP: ${ip}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;color:#162D24;max-width:640px">
      <h2 style="margin:0 0 12px;font-size:20px">Contact form</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9;width:120px"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Phone</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(phone || "—")}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Company</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(company || "—")}</td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e8ece9"><strong>Inquiry</strong></td><td style="padding:8px 0;border-bottom:1px solid #e8ece9">${escapeHtml(subjectLabel)}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;font-size:15px">Message</h3>
      <p style="margin:0;white-space:pre-wrap;background:#f6f8f6;border:1px solid #e8ece9;border-radius:8px;padding:14px">${escapeHtml(message)}</p>
      <p style="margin:18px 0 0;font-size:12px;color:#667066">Submitted: ${escapeHtml(submittedAt)} (Asia/Qatar)</p>
    </div>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      replyTo: `"${fullName}" <${email}>`,
      subject: `Contact form from ${fullName}${company ? ` (${company})` : ""}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API: failed to send email", {
      code: err?.code,
      message: err?.message,
    });

    const code = String(err?.code || "");
    let hint = "Could not send your message. Please try again shortly.";
    if (code === "ETIMEDOUT" || code === "ESOCKET" || code === "ECONNECTION") {
      hint =
        "Mail server timed out. Please try again or email us directly at contact@saqrih.com.";
    } else if (code === "EAUTH") {
      hint = "SMTP login failed. Check the email configuration.";
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
