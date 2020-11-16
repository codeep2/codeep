<template>
  <div class="page">
    <TheHeader>
      <div class="site-branding">
        <h2 class="branding">
          <nuxt-link to="/">
            Codeep's Blog
          </nuxt-link>
        </h2>
        <p>Make Things Simple.</p>
      </div>
    </TheHeader>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheHeader }
}
</script>

<style lang="scss" scoped>
  .page {
    margin: 0 auto;
    max-width: 960px;
  }
  .site-branding {
    .branding {
      font-size: 28px;
      > a {
        font-family: Georgia;
        color: #222222;
      }
    }
    > p {
      margin-left: 3px;
      color: #686868;
      font-family: Trebuchet MS, Georgia, serif;
    }
  }
</style>
