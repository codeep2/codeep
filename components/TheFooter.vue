<template>
  <footer>
    <div class="copyright">
      <p>
        ©{{ new Date().getFullYear() }}
        <svg-icon name="heart" />
        <nuxt-link to="/about">
          Codeep's
        </nuxt-link> &nbsp;blog
      </p>
    </div>
    <div class="description">
      <div>
        Powered by
        <span>
          <ul>
            <li
              v-for="tech in technology"
              :key="tech.content"
              :style="{color: tech.color}"
            >
              {{ tech.content }}
            </li>
          </ul>
        </span> on
        <a href="https://github.com/codeep2">
          GitHub
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      technology: [
        { content: 'HTML', color: '#e96228' },
        { content: 'JS', color: '#2f495e' },
        { content: 'Sass', color: '#c76494' },
        { content: 'Vuejs', color: '#41b883' },
        { content: 'Nuxtjs', color: '#108775' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes loop {
    0% { transform: translateY(0); }
    20% { transform: translateY(-20%); }
    40% { transform: translateY(-40%); }
    60% { transform: translateY(-60%); }
    80% { transform: translateY(-80%); }
    100% { transform: translateY(0%); }
  }
  @keyframes pulse {
      from { transform: scaleX(1); }
      50% { transform: scale3d(1.08, 1.08, 1.08); }
      to { transform: scaleX(1); }
  }
  footer {
    margin: 30px auto;
    text-align: center;
    a {
      color: black;
      text-decoration: underline;
      &:hover {
        background-color: #dedede;
        opacity: 0.6;
        transition: opacity 3s linear;
      }
    }
    .copyright {
      p {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      svg {
        width: 16px;
        height: 16px;
        margin: 0 5px;
        animation: pulse 1s linear infinite;
      }
    }
    .description {
      span {
        display: inline-block;
        height: 21px;
        margin-bottom: -3px;
        overflow: hidden;
        ul {
          display: inline-block;
          animation: loop 12s linear infinite alternate;
        }
      }
    }
  }
</style>
