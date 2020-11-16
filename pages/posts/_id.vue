<template>
  <section>
    <h1 class="page-title">
      {{ post.attributes.title }}
    </h1>
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
      margin-bottom: 40px;
    }
    article {
      h1,
      h2, h3,
      h4, h5, h6 {
        font-weight: bold;
      }
      h1 { font-size: 28px; }
      h2 { font-size: 25px; }
      h3 { font-size: 22px; }
      h4 { font-size: 19px; }
      h5 { font-size: 16px; }
      h6 { font-size: 13px; }
      p {
        margin-bottom: 24px;
      }
      img {
        display: block;
        margin: 15px auto;
        max-width: 94%;
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
        padding: 10px;
        color: #dcdcdc;;
        font-size: 14px;
        border-radius: 10px;
        background-color: #1e1e1e;
        opacity: 0.99;
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
          color: #ccc;
        }
      }
    }
  }
</style>
