<template>
  <div
    v-if="loading"
    ref="loading"
    class="cs-loading"
  >
    <div
      ref="main"
      class="main out-of-window"
    >
      <div class="line line1" />
      <div class="line line1-1" />
      <div class="line line1-2" />
      <div class="line line2" />
      <div class="line line2-1" />
      <div class="line line3" />
      <div class="line line3-1" />
      <div class="line line4" />
      <div class="line line5" />
      <div class="line line6" />
      <div class="line line6-1" />
      <div class="line line7" />
      <div class="line line7-1" />
      <div class="line line7-2" />
      <div class="line line8" />
      <div class="line line8-1" />
      <div class="line line8-2" />
      <div class="line line9" />
      <div class="line line10" />
      <div class="line line11" />
      <div class="line line12" />
      <div class="line line13" />
      <p
        ref="text"
        class="text"
      >
        loading...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      bodySmoothBehavior: ''
    }
  },
  methods: {
    async start () {
      await this._normalizeScrollBehavior()
      this.loading = true
      setTimeout(() => {
        this.$refs.main && this.$refs.main.classList.remove('out-of-window')
      }, 100)
    },
    finish () {
      setTimeout(() => {
        this.$refs.loading && this.$refs.loading.classList.add('loaded')
        setTimeout(() => {
          this.$refs.main && this.$refs.main.classList.add('out-of-window')
          setTimeout(() => {
            this.$refs.loading && this.$refs.loading.classList.remove('loaded')
            this.loading = false
            this._revertScrollBehavior()
          }, 50)
        }, 900)
      }, 900)
    },
    _normalizeScrollBehavior () {
      return new Promise((resolve) => {
        const body = document.querySelector('body')
        this.bodySmoothBehavior = body.style.scrollBehavior
        body.style.scrollBehavior = 'unset'
        this.$nextTick(resolve)
      })
    },
    _revertScrollBehavior () {
      const body = document.querySelector('body')
      body.style.scrollBehavior = this.bodySmoothBehavior
    }
  }
}
</script>

<style lang="scss" scoped>
.cs-loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: white;
  will-change: opacity;
  transition: opacity 0.5s 0.4s;

  &.loaded {
    opacity: 0;
  }

  .main {
    position: absolute;
    top: calc(50% - 63px);
    left: calc(50% - 63px);
    z-index: 1;
    width: 126px;
    height: 126px;

    &.out-of-window {
      .line1-1,
      .line2-1,
      .line3-1,
      .line5,
      .line6-1,
      .line7-2,
      .line9,
      .line10,
      .line11,
      .line12,
      .line13 {
        transform: rotateZ(-46deg) translateY(100vh);
      }

      .line1,
      .line1-2,
      .line2,
      .line3,
      .line4,
      .line6,
      .line7,
      .line7-1,
      .line8,
      .line8-2,
      .line8-1 {
        transform: rotateZ(-46deg) translateY(-100vh);
      }

      .text {
        opacity: 0;
        transition: opacity 0.5s;
      }
    }

    .line {
      position: absolute;
      z-index: 3;
      width: 7px;
      background: black;
      will-change: transform;
      transform: rotateZ(-46deg);

      &.line1 {
        top: 3px;
        right: 16px;
        height: 17px;
        transition: transform 0.5s .2s;
      }
      &.line1-1 {
        top: 3px;
        right: 21px;
        height: 32px;
        transition: transform 0.5s .25s;
      }
      &.line1-2 {
        top: 0px;
        right: 27px;
        height: 52px;
        transition: transform 0.5s .3s;
      }
      &.line2 {
        top: -2px;
        right: 48px;
        height: 39px;
        transition: transform 0.5s .35s;
      }
      &.line2-1 {
        top: 32px;
        right: 20px;
        height: 30px;
        transition: transform 0.5s .35s;
      }
      &.line3 {
        top: 11px;
        right: 56px;
        height: 25px;
        transition: transform 0.5s .4s;
      }
      &.line3-1 {
        top: 31px;
        right: 26px;
        height: 49px;
        transition: transform 0.5s .4s;
      }
      &.line4 {
        top: 14px;
        right: 38px;
        height: 87px;
        transition: transform 0.5s .45s;
      }
      &.line5 {
        top: 28px;
        right: 37px;
        height: 88px;
        transition: transform 0.5s .5s;
      }
      &.line6 {
        top: 45px;
        right: 52px;
        height: 53px;
        transition: transform 0.5s .55s;
      }
      &.line6-1 {
        top: 88px;
        right: 16px;
        height: 35px;
        transition: transform 0.5s .55s;
      }
      &.line7 {
        top: 62px;
        right: 61px;
        height: 30px;
        transition: transform 0.5s .6s;
      }
      &.line7-1 {
        top: 89px;
        right: 40px;
        height: 15px;
        transition: transform 0.5s .6s;
      }
      &.line7-2 {
        top: 102px;
        right: 22px;
        height: 23px;
        transition: transform 0.5s .65s;
      }
      &.line8 {
        top: 76px;
        right: 63px;
        height: 27px;
        transition: transform 0.5s .6s;
      }
      &.line8-1 {
        top: 100px;
        right: 43px;
        height: 16px;
        transition: transform 0.5s .6s;
      }
      &.line8-2 {
        top: 115px;
        right: 29px;
        height: 10px;
        transition: transform 0.5s .6s;
      }
      &.line9 {
        top: 86px;
        right: 58px;
        height: 43px;
        transition: transform 0.5s .6s;
      }
      &.line10 {
        top: 98px;
        right: 67px;
        height: 29px;
        transition: transform 0.5s .55s;
      }
      &.line11 {
        top: 93px;
        right: 83px;
        height: 35px;
        transition: transform 0.5s .6s;
      }
      &.line12 {
        top: 101px;
        right: 93px;
        height: 27px;
        transition: transform 0.5s .6s;
      }
      &.line13 {
        top: 111px;
        right: 104px;
        height: 15px;
        transition: transform 0.5s .6s;
      }
    }

    .text {
      position: absolute;
      bottom: -18%;
      left: 0;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      color: black;
      text-align: center;
      will-change: opacity;
      transition: opacity 0.5s 0.5s;
    }
  }
}
</style>
