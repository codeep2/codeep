<template>
  <header>
    <slot />
    <nav class="site-header__menu">
      <ul>
        <li
          v-for="title in navTitles"
          :key="title"
        >
          <nuxt-link :to="`/${title.toLowerCase()}`">
            {{ title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navTitles: ['Posts', ' Archive', 'About', 'RSS']
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes rotating {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 20px;
    .site-header__menu{
      align-self: flex-end;
      padding: 0 8px;
      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
      ul {
        display: flex;
        li {
          > a {
            color: black;
            font-size: 18px;
            padding: 0 8px;
            &:hover {
              color: #ffffff;
              background-color: #17202a;
              opacity: 0.30;
              transition: opacity 3s linear;
            }
          }
        }
      }
    }
  }
</style>
