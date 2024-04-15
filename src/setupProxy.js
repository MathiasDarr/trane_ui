const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(createProxyMiddleware('/api', {
        target: 'http://api:8080',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
    })
    );
}