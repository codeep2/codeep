const express = require('express')
const posts = require('../utils/postPayLoad')

const app = express()

app.get('/posts', async (req, res) => {
  await res.json(posts.default)
})

posts.default.forEach((post) => {
  app.get(`${post.attributes.routeLink}`, async (req, res) => {
    await res.json(post)
  })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
