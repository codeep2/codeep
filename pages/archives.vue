<template>
  <section>
    <ul class="timeline-wrapper">
      <li
        v-for="post in posts"
        :key="post.title"
        class="timeline-item"
      >
        <div
          v-if="post.isYearNode"
          class="timeline-year"
        >
          <span>
            {{ post.created.slice(0, post.created.search('-')) }}
          </span>
        </div>
        <div class="timeline-post">
          <time>
            {{ post.created.slice(post.created.search('-') + 1 ) }}
          </time>
          <div class="timeline-content">
            <div class="timeline-node" />
            <article>
              <h2>
                <nuxt-link :to="post.routeLink">
                  {{ post.title }}
                </nuxt-link>
              </h2>
            </article>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('/api/posts')
    return { posts }
  },
  created () {
    const yearArray = []
    this.posts.forEach((post) => {
      const year = post.created.slice(0, post.created.search('-'))
      if (yearArray.includes(year)) {
        post.isYearNode = false
      } else {
        post.isYearNode = true
        yearArray.push(year)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  section {
    .timeline-wrapper {
      position: relative;
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 9%;
        width: 4px;
        height: 100%;
        padding-bottom: 30px;
        border-radius: 2px;
        background-color: #000;
        z-index: -1;
      }
      .timeline-item {
        --bg-color: #27acce;
        margin-bottom: 20px;
        &:nth-child(4n + 1) {
          --bg-color: #74759b;
        }
        &:nth-child(4n + 2) {
          --bg-color: #346c9c;
        }
        &:nth-child(4n + 3) {
          --bg-color: #607d8b;
        }
        &:nth-child(4n) {
          --bg-color: #02c5be;
        }
        .timeline-year {
          position: relative;
          left: 6%;
          width: 60px;
          height: 60px;
          color: #fff;
          font-size: 16px;
          line-height: 60px;
          text-align: center;
          border-radius: 50%;
          margin: 20px 0 25px;
          background-color: #222222;
          box-shadow: 0 0 0 2px white,
                    0 0 0 5px #000;
        }
        .timeline-post {
          display: flex;
          align-items: center;
          time {
            font-weight: bold;
            color: var(--bg-color);
            margin-left: 19px;
          }
          .timeline-content {
            display: flex;
            align-items: center;
            .timeline-node {
              width: 13px;
              height: 13px;
              margin-left: 11px;
              border-radius: 50%;
              background-color: var(--bg-color);
            }
            article {
              position: relative;
              padding: 12px 8px;
              margin-left: 15px;
              border-radius: 3px;
              background-color: var(--bg-color);
              box-shadow: 7px 9px 9px 0px rgba(0, 0, 0, 0.2);
              transition: all 235ms cubic-bezier(0.4, 0, 1, 1) 0s;
              &:hover {
                transform: translate3d(0, 2px, 0);
                box-shadow: 4px 9px 7px -4px rgba(0, 0, 0, 0.2);
              }
              > h2 {
                display: flex;
                align-items: center;
                a {
                  color: #fff;
                  font-size: 16px;
                  font-weight: normal;
                  transform: translateZ(0);
                }
              }
              &:before {
                content: "";
                display: block;
                border: 9px solid transparent;
                border-right-color: var(--bg-color);
                position: absolute;
                top: 12px;
                left: -18px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 930px) {
    section {
      .timeline-wrapper {
        .timeline-item {
          .timeline-year {
            left: 16%
          }
          .timeline-post {
            display: block;
            position: relative;
            left: 9%;
            time {
              margin-left: 23px;
            }
            .timeline-content {
              .timeline-node {
                margin-left: -5px;
              }
              article {
                width: fit-content;
              }
            }
          }
        }
      }
    }
}
</style>
