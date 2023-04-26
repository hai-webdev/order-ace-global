<template>
  <div class="banner-container" :class="{inner}">
    <img class="banner-img" :src="src" :alt="title" />
    <div class="banner-title" v-if="title" v-html="title"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    inner:{
      type:Boolean
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/fonts.css";
@import "./index.less";
@import "./1440.less" screen and (max-width:1440px);
@import "./1080.less" screen and (max-width:1080px);
@import "./768.less" screen and (max-width:768px);
</style>