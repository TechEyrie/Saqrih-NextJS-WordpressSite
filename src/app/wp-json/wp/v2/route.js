export async function GET() {
  return Response.json(
    {
      namespace: "wp/v2",
      routes: {
        "/wp/v2": {
          namespace: "wp/v2",
          methods: ["GET"],
          endpoints: [{ methods: ["GET"], args: {} }],
        },
        "/wp/v2/posts": {
          namespace: "wp/v2",
          methods: ["GET", "POST"],
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
