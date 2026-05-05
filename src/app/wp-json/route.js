export async function GET() {
  return Response.json(
    {
      name: "TechEyrie",
      description: "",
      url: "/",
      home: "/",
      gmt_offset: "0",
      namespaces: ["wp/v2", "oembed/1.0"],
    },
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );
}
