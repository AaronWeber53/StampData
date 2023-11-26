const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/stamp",
      "/json/images"
    ],
    target: "https://localhost:7086",
    secure: false,
    changeOrigin: true
  },
]

module.exports = PROXY_CONFIG;
