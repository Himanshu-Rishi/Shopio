const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://shopio-smartbuy.onrender.com",
      changeOrigin: true,
    })
  );
};
