<template>
  <div class="home-container">
    <Banner :src="bannerSrc" :title="bannerTitle" />
    <Info />
    <Contact />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Info from "./components/Info";
import Contact from "./components/Contact";
import BannerMixin from "@/mixins/banner";
export default {
  mixins: [BannerMixin()],
  components: {
    Banner,
    Info,
    Contact,
  },
};
</script>

