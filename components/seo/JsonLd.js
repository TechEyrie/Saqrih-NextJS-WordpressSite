/**
 * Renders one or more JSON-LD objects for search engines.
 * @param {{ data: object | object[] | null | undefined }} props
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const payload = Array.isArray(data)
    ? data.length === 1
      ? data[0]
      : {
          "@context": "https://schema.org",
          "@graph": data
            .filter(Boolean)
            .map(({ "@context": _c, ...rest }) => rest),
        }
    : data;

  if (!payload) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
