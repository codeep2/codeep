<template>
  <div class="page">
    <TheHeader>
      <div class="site-branding">
        <h1>
          <nuxt-link to="/">
            C<svg-icon
              name="sun"
            />deep's Blog
          </nuxt-link>
        </h1>
        <div class="branding">
          <div class="logo">
            <svg-icon
              name="logo"
            />
            <div class="tree">
              🌳
            </div>
            <div class="hill" />
          </div>
          <p>Make Things Simple.</p>
        </div>
      </div>
    </TheHeader>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
  .page {
    margin: 0 auto;
    max-width: 960px;
  }
  .site-branding {
    > h1 {
      margin-bottom: 15px;
      > a {
        color: #222222;
        font-family: Georgia;
        svg {
          display: inline-block;
          width: 19px;
          height: 19px;
          margin: 0 3px;
          animation: rotating 9s infinite linear;
        }
      }
    }
    .branding {
      display: flex;
      .logo {
        width: fit-content;
        margin-right: 4px;
        > svg {
          width: 64px;
          height: 60px;
          margin-bottom: -6px;
        }
        .tree {
          display: inline-block;
          text-shadow: 2px 4px 8px;
        }
        .hill {
          position: relative;
          width: 88px;
          height: 3px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          background-color: limegreen;
        }
      }
      > p {
        font-family: Trebuchet MS, Georgia, serif;
        text-shadow: 5px 3px 4px;
        align-self: flex-end;
      }
    }
  }
</style>
