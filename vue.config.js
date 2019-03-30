module.exports = {
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080, // CHANGE YOUR PORT HERE!
    //https: true,
    hotOnly: false,
    proxy: {
      '^/auth': {
        target: 'http://[::1]:7000',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: 'http://casasdapraia.com'
      }
    }
  },


};
