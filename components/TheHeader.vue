<template>
  <header>
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
    <div class="site-header__menu">
      <nav>
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
    </div>
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
