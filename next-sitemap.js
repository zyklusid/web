const siteUrl = 'https://www.zyklus.id'

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps : [`${siteUrl}/sitemap.xml`, `${siteUrl}/server-sitemap.xml`],
    }
};