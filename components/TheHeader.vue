<template>
  <header>
    <slot />
    <nav class="site-header__menu">
      <div
        class="navbar-toggle"
        :class="{ open: isActive }"
        @click="isActive = !isActive"
      >
        <div class="navicon">
          <div class="bar1" />
          <div class="bar2" />
          <div class="bar3" />
        </div>
      </div>
      <ul
        :class="['navbar', { open: isActive }]"
      >
        <li
          v-for="title in navTitles"
          :key="title"
          @click="isActive = !isActive"
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
          transition: .3s;
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .navicon {
          position: relative;
        }
        .navbar-toggle.open {
          .bar1, .bar3 {
            transition: .3s;
            transform-origin: 50% 50%;
          }
          .bar1 {
            position: absolute;
            transform: rotate3d(0, 0, 1, 45deg);
          }
          .bar2 {
            background-color: transparent;
          }
          .bar3 {
            position: absolute;
            bottom: 0;
            transform: rotate3d(0, 0, 01, -45deg);
          }
        }
        .navbar {
          display: none;
        }
        .navbar.open {
          position: absolute;
          top: 45px;
          right: 1px;
          display: flex;
          flex-direction: column;
          padding: 5px;
          border: 1px solid #f2f3f3;
          border-radius: 3px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.25);
          z-index: 9;
          > li {
            padding: 3px 0;
            border-bottom: 1px solid #f2f3f3;
            > a {
              color: #7a8288;
            }
          }
        }
      }
    }
  }
</style>
