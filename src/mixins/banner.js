import {getScodeInfo} from "@/api/getScode";
export default (id) => {
  return {
    data() {
      return {
        bannerSrc: "",
        bannerTitle: "",
      };
    },
    async created() {
      const bannerResp = await getScodeInfo(id ? id : this.$route.meta.scode);
      this.bannerSrc = bannerResp.data.pic;
      this.bannerTitle = bannerResp.data.def1.replace(/\n|\r/, "<br>");
    },
  };
};
