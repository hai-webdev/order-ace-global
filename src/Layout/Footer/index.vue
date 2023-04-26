<template>
  <div class="footer-container">
    <div class="top-layout">
      <router-link to="/" class="logo">
        <div class="title">Ace Global</div>
        <div class="info">Business Acquisition Limited</div>
      </router-link>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="bold">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/company" class="bold">ABOUT US</router-link>
          <router-link to="/company">COMPANY</router-link>
          <router-link to="/team">MANAGEMENT TEAM</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/strategy" class="bold">OUR STRATEGY</router-link>
          <router-link to="/strategy">OUR CRITERIA</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/investor_relation" class="bold">INVESTOR RELATIONS</router-link>
          <router-link to="/contact" class="bold">CONTACT</router-link>
          <a :href="'mailto:' + 'aceteam@aceglobal-acq.com'"
            >aceteam@aceglobal-acq.com</a
          >
        </li>
      </ul>
    </div>
    <div class="bottom-layout">
      <div class="left-layout">
        <router-link to="/">PRIVACY POLICY</router-link>
        <router-link to="/">TERMS</router-link>
      </div>
      <div class="left-layout">
        <div class="copyright">
          © ACE GLOBAL BUSINESS ACQUISITION LIMITED 2022
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
@import "./index.less";
@import "./1560.less" screen and (max-width:1560px);
@import "./1440.less" screen and (max-width:1440px);
@import "./1080.less" screen and (max-width:1080px);
@import "./768.less" screen and (max-width:768px);
</style>