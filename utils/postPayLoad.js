/*
 * @Date: 2020-11-14 09:52:10
 * @Author: Codeep2
 * @LastEditTime: 2020-11-18 14:57:41
 * @LastEditors: Codeep2
 * @Description: md 文章处理
 */

const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const marked = require('marked')
const hljs = require('highlight.js')

const postsList = []
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
          // 因为 marked 不能解析经过 fm 解析后的 HTML，故拆分开来=.=
          const post = fm(markdownString)
          post.body = marked(markdownString)
          post.attributes.routeLink = `/posts/${dirName}`
          postsList.push(post.attributes)
          postsObjList.push(postProcess(post))
        }
      })
    }
  })
  return postsObjList
}

const sortPostsListByDate = (posts) => {
  posts.sort((prePost, nextPost) => {
    return Date.parse(nextPost.created) - Date.parse(prePost.created)
  })
  return posts
}

const postProcess = (post) => {
  const pattern = /^<hr>[\s\S]*?<hr>/gi
  post.body = post.body.replace(pattern, '')
  return post
}

const posts = postPayLoad('./posts')
const sortedPost = sortPostsListByDate(postsList)

export default { posts, sortedPost }
