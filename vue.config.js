module.exports = {
  assetsDir: "static-vue",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api.php": {
        target: "http://aceglobal-acq.mym224.com/",
      },
      "/static": {
        target: "http://aceglobal-acq.mym224.com/",
      },
    },
  },
};
