const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: [path.join(__dirname, 'styles')],
  images: {
    domains: ['picsum.photos', 'static.ghost.org', 'localhost', 'ziblog.zyklus.id'],
  },
  env: {
    BLOG_API_KEY: process.env.BLOG_API_KEY
  }
}
