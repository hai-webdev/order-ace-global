<template>
  <div class="team-container">
    <Banner :src="bannerSrc" :title="bannerTitle" :inner="true" />
    <ul class="team-list">
      <li
        class="team-item"
        @click="toggleItem(index)"
        v-for="(item, index) in teamList"
        :key="item.id"
      >
        <div class="img">
          <img :src="item.ico" :alt="item.title" />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="position" v-html="item.ext_fbt"></div>
      </li>
    </ul>
    <div ref="teamView">
      <template v-for="(item, index) in teamList">
        <div class="team-view" :key="item.id" v-if="index === activeIndex">
          <div class="left-layout">
            <div class="photo">
              <img :src="item.ico" :lt="item.title" />
            </div>
          </div>
          <div class="right-layout">
            <div class="top-text">
              <div class="title">{{ item.title }}</div>
              <div class="position" v-html="item.ext_fbt"></div>
            </div>
            <div class="bottom-content">
              <div
                class="desc"
                v-if="item.ext_desc"
                v-html="item.ext_desc"
              ></div>
              <div class="content" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </template>
      <div class="toggle-btn-wrapper">
        <div class="toggle-btn">
          <div class="prev-btn" @click="toggleItem('-')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.76 34.37">
              <defs></defs>
              <g id="图层_2" data-name="图层 2">
                <g id="Layer_1" data-name="Layer 1">
                  <polyline
                    class="cls-1"
                    points="19.43 0.37 0.75 17.18 19.43 34"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div class="next-btn" @click="toggleItem('+')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.76 34.37">
              <defs></defs>
              <g id="图层_2" data-name="图层 2">
                <g id="Layer_1" data-name="Layer 1">
                  <polyline
                    class="cls-1"
                    points="0.33 34 19.02 17.18 0.33 0.37"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import BannerMixin from "@/mixins/banner";
import getList from "@/api/getList";
export default {
  mixins: [BannerMixin()],
  data() {
    return {
      teamList: [],
      activeIndex: 0,
    };
  },
  components: {
    Banner,
  },
  created() {
    this.getData();
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  methods: {
    toggleItem(val) {
      if (val === "+") {
        if (this.activeIndex === this.teamList.length - 1) {
          this.activeIndex = -1;
        }
        this.activeIndex++;
        window.scrollTo({ top: this.$refs.teamView.offsetTop - 120 });
      } else if (val === "-") {
        if (this.activeIndex === 0) {
          this.activeIndex = this.teamList.length;
        }
        this.activeIndex--;
        window.scrollTo({ top: this.$refs.teamView.offsetTop - 120 });
      } else {
        this.activeIndex = val;
        window.scrollTo({ top: this.$refs.teamView.offsetTop - 120 });
      }
    },
    async getData() {
      const resp = await getList({ scode: this.$route.meta.scode });
      this.teamList = resp.data;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./1080.less" screen and (max-width: 1080px);
@import "./768.less" screen and (max-width: 768px);
</style>