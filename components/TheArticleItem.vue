<template>
  <article>
    <nuxt-link
      class="article-title"
      :to="article.routeLink"
    >
      {{ article.title }}
    </nuxt-link>
    <div class="article-meta">
      <span class="article-created">
        <svg-icon name="time" />
        {{ article.created }}
      </span>
      <div class="article-tag">
        <svg-icon name="tag" />
        <span
          v-for="tag in article.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="article-desc">
      <p>{{ article.description }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  article {
    margin-bottom: 30px;
    .article-title {
      color: #2f1400;
      font-size: 26px;
      font-family: Lucida Bright, Rockwell, Times New Roman;
    }
    .article-meta {
      display: flex;
      align-items: center;
      margin: 8px 0 3px 0;
      font-size: 14px;
      color: #686868;
      .article-created {
        margin-right: 15px;
        > svg {
          width: 16px;
          height: 16px;
        }
      }
      .article-tag {
        > svg {
          width: 20px;
          height: 20px;
          margin-bottom: -4px;
        }
      }
    }
    .article-desc {
      color: #000000a8;
    }
  }
</style>
