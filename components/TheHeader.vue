<template>
  <header>
    <slot />
    <nav class="site-header__menu">
      <ul>
        <li
          v-for="title in navTitles"
          :key="title"
        >
          <nuxt-link :to="routeLink(title)">
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
      navTitles: ['Posts', 'Archives', 'About', 'RSS']
    }
  },
  methods: {
    routeLink (title) {
      if (title === 'Posts') {
        return '/'
      }
      return `/${title.toLowerCase()}`
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;
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
