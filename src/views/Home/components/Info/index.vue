<template>
  <div class="info-container">
    <ul class="tab-list">
      <li
        class="tab-item"
        @mouseover="infoIndex = index"
        v-for="(item, index) in infoList"
        :key="item.id"
        :class="{ on: index === infoIndex }"
      >
        {{item.title}}
      </li>
    </ul>
    <ul class="info-list">
      <li
        class="info-item"
        ref="infoImg"
        v-for="(item, index) in infoList"
        :key="item.id"
        v-show="index === infoIndex"
      >
        <div class="left-layout">
          <div class="img">
            <img :src="item.ico" :alt="item.title" />
          </div>
        </div>
        <div class="right-layout">
          <div class="text">
            <div class="title">{{ item.ext_fbt }}</div>
            <div class="desc" v-html="item.content"></div>
          </div>
          <router-link :to="'/' + item.outlink" class="more more-btn">More</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      infoIndex: 0,
      textHeight: 0,
    };
  },
  created() {
    this.$store.dispatch("home/getInfo");
    const typeId = Number(this.$route.query.type);
    if (typeId) {
      this.infoIndex = typeId;
    }
  },
  computed: {
    ...mapState({
      infoList: (state) => state.home.infoList,
    }),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "./index.less";
@import "./1080.less" screen and (max-width: 1080px);
@import "./768.less" screen and (max-width: 768px);
</style>