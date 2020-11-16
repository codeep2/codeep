<template>
  <main>
    <the-article-item
      v-for="post in posts"
      :key="post.routeLink"
      :article="post"
    />
  </main>
</template>

<script>
import TheArticleItem from '@/components/TheArticleItem.vue'

export default {
  components: { TheArticleItem },
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('/api/posts')
    return { posts }
  }
}
</script>

<style lang="scss">

</style>
