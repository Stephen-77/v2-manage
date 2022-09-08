const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // pathRewrite: { "^/api": "" },
      },
      // "/mock": {
      //   target: " http://localhost:8080",
      //   changeOrgin:true
      // },
    },
  },
});
