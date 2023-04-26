<template>
  <div
    class="contact-container"
    :style="{ backgroundImage: `url(${data.ico})` }"
  >
    <div class="text-box">
      <div class="text">
        <div class="title">{{ data.title }}</div>
        <div class="content" v-html="data.content"></div>
        <router-link class="more more-btn" to="/contact">{{ data.ext_wb }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("home/getContact");
  },
  computed: {
    ...mapState({
      data: (state) => state.home.contact,
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