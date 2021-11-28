const siteUrl = "https://www.albinronnkvist.se"

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: [
    { userAgent: "*", disallow: "/admin/*" },
    { userAgent: "*", allow: "/" },
  ],
  exclude: ["/admin/*"]
}