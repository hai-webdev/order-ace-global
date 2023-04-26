export default () => {
  return {
    mounted() {
      this.$nextTick(() => {
        new this.$wow.WOW().init();
      });
    },
  };
};
