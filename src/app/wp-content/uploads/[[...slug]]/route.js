const UPSTREAM_BASE = {
  "icomat-cdn": "https://icomat.cdn.prismic.io/icomat/",
  "icomat-img": "https://images.prismic.io/icomat/",
};

function isBadSlug(slug) {
  if (!slug?.length || slug.length < 2) return true;
  return slug.some((s) => s.includes("..") || s.includes("\\"));
}

function buildUpstreamUrl(slug) {
  const [bucket, ...rest] = slug;
  const base = UPSTREAM_BASE[bucket];
  if (!base || rest.length === 0) return null;
  const path = rest.map(encodeURIComponent).join("/");
  if (!path) return null;
  return base + path;
}

function passthroughHeaders(upstream) {
  const out = new Headers();
  out.set("Cache-Control", "public, max-age=31536000, immutable");
  const allow = [
    "content-type",
    "content-length",
    "content-range",
    "accept-ranges",
    "etag",
    "last-modified",
  ];
  for (const name of allow) {
    const v = upstream.headers.get(name);
    if (v) out.set(name, v);
  }
  return out;
}

async function resolveParams(raw) {
  return raw instanceof Promise ? raw : Promise.resolve(raw);
}

async function proxy(request, context) {
  const { slug } = await resolveParams(context.params);
  if (isBadSlug(slug)) {
    return new Response(null, { status: 404 });
  }
  const url = buildUpstreamUrl(slug);
  if (!url) {
    return new Response(null, { status: 404 });
  }

  const method = request.method;
  if (method !== "GET" && method !== "HEAD") {
    return new Response(null, { status: 405 });
  }

  /** @type {RequestInit} */
  const init = { method, redirect: "follow" };
  if (method === "GET") {
    const range = request.headers.get("range");
    if (range) {
      init.headers = { Range: range };
    }
  }

  const upstream = await fetch(url, init);
  const headers = passthroughHeaders(upstream);

  if (method === "HEAD") {
    return new Response(null, { status: upstream.status, headers });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}

export async function GET(request, context) {
  return proxy(request, context);
}

export async function HEAD(request, context) {
  return proxy(request, context);
}
