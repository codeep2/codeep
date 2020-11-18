<template>
  <section>
    <h1 class="page-title">
      {{ post.attributes.title }}
    </h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <article v-html="post.body" />
  </section>
</template>

<script>
export default {
  layout: 'articlePage',
  async asyncData ({ $axios, route }) {
    const post = await $axios.$get(`/api${route.path}`)
    return { post }
  }
}
</script>

<style lang="scss">
  section {
    padding: 10px 20px;
    > h1 {
      font-size: 36px;
      text-align: center;
      margin-bottom: 40px;
    }
    article {
      h1,
      h2, h3,
      h4, h5, h6 {
        font-weight: bold;
        margin-bottom: 15px;
      }
      h1 {
        color: #2196f3;
        font-size: 28px;
      }
      h2 {
        padding-bottom: 6px;
        color: #03a9f4;
        font-size: 23px;
        border-bottom: 1px solid #eaecef;
      }
      h3 {
        color: #3ab8f1;
        font-size: 18px;
      }
      h4 {
        color: #4ec0f5;
        font-size: 15px;
      }
      p,
      li {
        font-family: 'Source Han Serif', 'MicroSoft Yahei', Georgia, serif;;
      }
      p {
        margin-bottom: 24px;
      }
      img {
        display: block;
        margin: 15px auto;
        max-width: 92%;
      }
      li > pre {
        margin-top: 10px;
      }
      ul {
        margin: 18px 0;
        padding-left: 25px;
        li {
          line-height: 28px;
          list-style: disc;
          ul {
            li {
              list-style: circle;
            }
          }
        }
      }
      ol {
        margin-top: 20px;
        margin-bottom: 8px;
        padding-left: 35px;
        li {
          list-style: decimal;
          ul {
            li {
              list-style: disc;
            }
          }
        }
      }
      pre {
        margin: 24px 0;
        padding: 8px;
        border-radius: 10px;
        background-color: #1e1e1e;
        box-shadow: 0 9px 15px 0px rgba(0,0,0,.4);
        code {
          color: #f8f8f2;
          font-size: 14px;
          line-height: 1.3;
          font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
        }
      }
      blockquote {
        background-color: #e4e4e47a;
        quotes: '\201C''\201D';
        > p {
          padding: 9px;
        }
        &:before {
          position: relative;
          float: left;
          top: -10px;
          content: open-quote;
          margin-left: -1.2em;
        }
        &:after {
          position: relative;
          float: right;
          bottom: 43px;
          content: close-quote;
          margin-right: -1.2em;
        }
        &:before, &:after {
          font-size: 36px;
          color: #ffa7a7;
        }
      }
      a {
        color: #f18c35;
        text-decoration: underline;
        &:hover {
          background-color: #dedede;
          opacity: 0.6;
          transition: opacity 3s linear;
        }
      }
    }
  }
</style>
