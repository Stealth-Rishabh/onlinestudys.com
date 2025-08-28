export default function robots() {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://onlinestudys.com`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private", "/api","/terms-conditions","/privacy-policy"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
