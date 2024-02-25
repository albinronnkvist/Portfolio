const siteUrl = "https://www.albinronnkvist.me"

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin/*" },
      { userAgent: "*", disallow: "/*/admin/*" },
      { userAgent: "*", allow: "/" },
    ]
  },
  exclude: [
    "/admin/*", 
    "/*/admin/*"
  ]
}