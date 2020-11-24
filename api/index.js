const express = require('express')
const postPayload = require('../utils/postPayLoad')

const port = process.env.API_PORT
const app = express()

app.get('/posts', async (req, res) => {
  await res.json(postPayload.sortedPost)
})

postPayload.posts.forEach((post) => {
  app.get(`${post.attributes.routeLink}`, async (req, res) => {
    await res.json(post)
  })
})

if (port) {
  app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
  })
}

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
