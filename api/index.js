const express = require('express')
const postPayload = require('../utils/postPayLoad')

const app = express()

app.get('/posts', async (req, res) => {
  await res.json(postPayload.default.sortedPost)
})

postPayload.default.posts.forEach((post) => {
  app.get(`${post.attributes.routeLink}`, async (req, res) => {
    await res.json(post)
  })
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
