<template>
  <header>
    <slot />
    <nav class="site-header__menu">
      <button
        class="navbar-toggle"
        @click="isActive = !isActive"
      >
        <div class="bar1" />
        <div class="bar2" />
        <div class="bar3" />
      </button>
      <ul
        :class="['navbar', { open: isActive }]"
      >
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
      isActive: false,
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
    .site-header__menu {
      align-self: flex-end;
      .navbar-toggle {
        display: none;
        width: 44px;
        height: 40px;
        background-color: #7a8288;
        .bar1, .bar2, .bar3 {
          width: 28px;
          height: 4px;
          margin: 4px auto;
          border-radius: 2px;
          background-color: #fff;
        }
      }
      ul {
        display: flex;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
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
    @media (max-width: 550px) {
      .site-header__menu {
        position: relative;
        .navbar-toggle {
          display: block;
        }
        .navbar {
          display: none;
        }
        .navbar.open {
          position: absolute;
          top: 45px;
          right: 16px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
