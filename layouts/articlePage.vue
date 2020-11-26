<template>
  <div class="page">
    <TheHeader>
      <div class="site-branding">
        <h2 class="branding">
          <nuxt-link to="/">
            Codeep's Blog
          </nuxt-link>
        </h2>
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
    padding: 15px 20px;
    max-width: 930px;
  }
  header {
    margin-bottom: 45px;
  }
  .site-branding {
    .branding {
      font-size: 36px;
      > a {
        font-family: Goudy Old Style, Garamond, Times New Roman, Georgia;
        color: #191414;
      }
    }
    > p {
      margin-left: 3px;
      color: #686868;
      font-size: 14px;
      font-family: Trebuchet MS, Georgia, serif;
    }
  }
</style>
