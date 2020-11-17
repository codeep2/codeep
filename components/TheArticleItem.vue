<template>
  <article>
    <nuxt-link
      class="article-title"
      :to="article.attributes.routeLink"
    >
      {{ article.attributes.title }}
    </nuxt-link>
    <div class="article-meta">
      <span class="article-created">
        <svg-icon name="time" />
        {{ article.attributes.created }}
      </span>
      <div class="article-tag">
        <svg-icon name="tag" />
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
    width: 580px;
    margin-bottom: 30px;
    .article-title {
      color: #2f1400;
      font-size: 26px;
      font-family: Lucida Bright, Rockwell, Times New Roman;
    }
    .article-meta {
      display: flex;
      align-items: center;
      margin-top: 8px;
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
