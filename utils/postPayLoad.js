const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const marked = require('marked')
const hljs = require('highlight.js')

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
          const markdownString = fs.readFileSync(filePath, 'utf8')

          marked.setOptions({
            highlight: (code) => {
              return hljs.highlightAuto(code).value
            }
          })
          const post = fm(markdownString)
          post.body = marked(markdownString)
          post.attributes.routeLink = `/posts/${dirName}`
          postsObjList.push(post)
        }
      })
    }
  })
  return postsObjList
}

// const postProcess = (post) => {

// }

const posts = postPayLoad('./posts')

export default posts
