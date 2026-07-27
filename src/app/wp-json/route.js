export async function GET() {
  return Response.json(
    {
      name: "Saqrih",
      description:
        "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.",
      url: "/",
      home: "/",
      gmt_offset: "0",
      timezone_string: "",
      namespaces: ["oembed/1.0", "wp/v2", "wp-site-health/v1"],
      authentication: {
        "application-passwords": {
          endpoints: {
            authorization: "/wp-admin/authorize-application.php",
          },
        },
      },
      routes: {
        "/": {
          namespace: "",
          methods: ["GET"],
          endpoints: [{ methods: ["GET"], args: {} }],
        },
        "/wp/v2": {
          namespace: "wp/v2",
          methods: ["GET"],
          endpoints: [{ methods: ["GET"], args: {} }],
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Link: '</wp-json/>; rel="https://api.w.org/"',
      },
    }
  );
}
