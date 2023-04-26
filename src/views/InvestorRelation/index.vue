<template>
  <div class="investor-relation-container">
    <Banner :src="bannerSrc" :title="bannerTitle" :inner="true" />
    <main class="content">
      <div class="center">
        <div class="left-layout">
          <div class="title">{{ data.title }}</div>
          <div class="desc" v-html="data.content"></div>
        </div>
        <div class="right-layout">
          <a :href="data.ext_view" target="_blank" class="link more-btn"
            >View Fillings</a
          >
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
  created() {
    this.$store.dispatch("investor/getData");
  },
  computed: {
    ...mapState({
      data: (state) => state.investor.data,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./1080.less" screen and (max-width:1080px);
@import "./768.less" screen and (max-width:768px);
</style>