const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const marked = require('marked')

const postPayLoad = (dirPath) => {
  const postsObjList = []
  const postDir = fs.readdirSync(dirPath)
  postDir.forEach((dirName) => {
    const subDirPath = `${dirPath}/${dirName}`
    const stat = fs.statSync(subDirPath)
    if (stat.isDirectory()) {
      const files = fs.readdirSync(subDirPath)
      files.forEach((fileName) => {
        if (path.extname(fileName) === '.md') {
          const filePath = `${subDirPath}/${fileName}`
          const post = fm(fs.readFileSync(filePath, 'utf8'))

          post.attributes.routeLink = `/posts/${dirName}`
          post.body = marked(post.body)
          postsObjList.push(post)
        }
      })
    }
  })
  return postsObjList
}

const posts = postPayLoad('./posts')

export default posts
