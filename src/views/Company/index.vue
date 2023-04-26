<template>
  <div class="company-container">
    <Banner :src="bannerSrc" :title="bannerTitle" :inner="true" />
    <main class="main-content">
      <div class="text" v-html="data.content"></div>
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
    this.$store.dispatch("company/getData");
  },
  computed: {
    ...mapState({
      data: (state) => state.company.data,
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