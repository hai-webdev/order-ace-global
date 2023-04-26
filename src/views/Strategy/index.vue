<template>
  <div class="strategy-container">
    <Banner :src="bannerSrc" :title="bannerTitle" :inner="true" />
    <main class="main-content">
      <div class="center">
        <div class="acquisition-wrapper">
          <div class="left-layout">
            <img :src="data.ico" :alt="data.title" />
          </div>
          <div class="right-layout">
            <div class="title">{{ data.title }}</div>
            <div class="desc">
              Focusing on
              <router-link
                :to="{
                  name: 'Home',
                  query: {
                    type: 0,
                  },
                }"
                >people</router-link
              >,
              <router-link
                :to="{
                  name: 'Home',
                  query: {
                    type: 1,
                  },
                }"
                >potential</router-link
              >
              <br />
              and
              <router-link
                :to="{
                  name: 'Home',
                  query: {
                    type: 2,
                  },
                }"
                >strategy</router-link
              >
              while leveraging on
              <br />
              our management team’s expertise.
            </div>
            <div class="content" v-html="data.ext_nr2"></div>
          </div>
        </div>
        <div class="investment-wrapper">
          <div class="title">{{ data.ext_bt2 }}</div>
          <div class="investment-content">
            <div class="left-layout">
              <div class="top-text" v-html="data.ext_nr3"></div>
              <div class="bottom-text" v-html="data.ext_nr4"></div>
            </div>
            <div class="right-layout">
              <div class="content" ref="content" v-html="data.content"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import BannerMixin from "@/mixins/banner";
import { mapState } from "vuex";
export default {
  mixins: [BannerMixin()],
  components: {
    Banner,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("strategy/getData");
  },
  computed: {
    ...mapState({
      data: (state) => state.strategy.data,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
@import "./index.less";
@import "./1080.less" screen and (max-width: 1080px);
@import "./768.less" screen and (max-width: 768px);
</style>