const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: "https://www.haoht123.com/",
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": "/"
       },
       // cookieDomainRewrite: "http://localhost:3000"
    }));
};