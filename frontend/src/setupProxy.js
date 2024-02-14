const { createProxyMiddleware } = require("http-proxy-middleware");

const target = process.env.REACT_APP_NODE_API_URL || "http://localhost:3001";

module.exports = function (app) {
  app.use(
    "/api", // Only proxy requests that start with /api
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
    })
  );
};
