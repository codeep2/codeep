<template>
  <section class="posts-wrap">
    <ul class="posts-lists">
      <li
        v-for="post in posts"
        :key="post.title"
        class="posts-item"
      >
        <div class="timeline-node" />
        <div class="timeline-tail" />
        <article>
          <time>
            {{ post.created.slice(post.created.search('-') + 1 ) }}
          </time>
          <h2>
            <nuxt-link :to="post.routeLink">
              {{ post.title }}
            </nuxt-link>
          </h2>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('/api/posts')
    return { posts }
  }
}
</script>

<style lang="scss" scoped>

</style>
