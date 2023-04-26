<template>
  <div class="nav-container">
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="(nav, index) in navList"
        :key="nav.id"
        :style="{ order: index >= navList.length / 2 ? index + 1 : index }"
      >
        <router-link
          :to="{
            name: nav.filename
              ? nav.filename
              : nav.son && nav.son.length
              ? nav.son[0].filename
              : '',
          }"
          >{{ nav.name }}
          <i
            class="arrow-down"
            v-if="nav.son && nav.son.length"
            :style="{ backgroundImage: `url(${arrowDown})` }"
          ></i>
        </router-link>
        <ul class="sublist" v-if="nav.son && nav.son.length">
          <li class="subitem" v-for="n in nav.son" :key="n.id">
            <router-link
              :to="{
                name: n.filename,
              }"
              >{{ n.name }}</router-link
            >
          </li>
        </ul>
      </li>
      <li class="nav-item logo" :style="{ order: navList.length / 2 }">
        <router-link to="/">
          <img :src="logo" alt="" />
        </router-link>
      </li>
    </ul>
    <div class="m-header" :class="{ on: mList }">
      <router-link to="/" class="logo">
        <img :src="logo" alt="" />
      </router-link>
      <div class="menu" @click="slideToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="m-nav-list" v-show="mList">
        <li class="m-nav-item" v-for="(nav, index) in navList" :key="nav.id">
          <div class="text">
            <router-link
              :to="{
                name: nav.filename
                  ? nav.filename
                  : nav.son && nav.son.length
                  ? nav.son[0].filename
                  : '',
              }"
              >{{ nav.name }}</router-link
            >
            <i
              class="arrow-down"
              v-if="nav.son && nav.son.length"
              :style="{ backgroundImage: `url(${arrowDown})` }"
              @click="toggleSubList(index)"
            ></i>
          </div>
          <transition name="slide">
          <ul class="sublist" v-if="nav.son && nav.son.length" v-show="nav.active">
            <li class="subitem" v-for="n in nav.son" :key="n.id">
              <router-link
                :to="{
                  name: n.filename,
                }"
                >{{ n.name }}</router-link
              >
            </li>
          </ul>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import arrowDown from "@/assets/images/icon/arrow-down.svg";
export default {
  data() {
    return {
      arrowDown,
      mList: false,
    };
  },
  created() {
    this.$store.dispatch("site/getNav");
    this.$store.dispatch("site/getSite");
  },
  computed: {
    ...mapState({
      navList: (state) => state.site.nav,
      logo: (state) => state.site.site.logo,
    }),
  },
  methods: {
    toggleSubList(index) {
      this.$set(this.navList[index], "active", !this.navList[index].active);
    },
    slideToggle() {
      this.mList = !this.mList;
    },
  },
  watch: {
    $route() {
      this.mList = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixins.less";
@import "~@/styles/fonts.css";
@import "./transition.less";
@import "./index.less";
@import "./1440.less" screen and (max-width: 1440px);
@import "./1080.less" screen and (max-width: 1080px);
@import "./768.less" screen and (max-width: 768px);
</style>