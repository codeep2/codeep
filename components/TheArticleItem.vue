<template>
  <article>
    <h3 class="article-title">
      {{ article.attributes.title }}
    </h3>
    <div class="article-meta">
      <span class="article-created">
        {{ article.attributes.created }}
      </span>
      <i class="iconfont icon-time1" />
      <div class="article-tag">
        <span
          v-for="tag in article.attributes.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="article-desc">
      <p>{{ article.attributes.description }}</p>
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
      font-size: 29px;
      font-family: Rockwell, Times New Roman;
    }
    .article-meta {
      display: flex;
      font-size: 14px;
      color: #686868;;
    }
  }
</style>
