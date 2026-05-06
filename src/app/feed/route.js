export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>Eyrion</title><link>/</link><description>Eyrion is a premier WordPress agency delivering design, development, hosting, maintenance, and ongoing support.</description><generator>https://wordpress.org/?v=6.7.2</generator></channel></rss>`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
    },
  });
}
