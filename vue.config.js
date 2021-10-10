module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? './'
    //     : '/',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: process.env.BASE_API,
                pathRewrite: {'^/api': ''}  // pathRewrite: 用'/api'代替target的值，写请求时直接写'/api/xxx'
            },
            '/githubRestApi': {
                target: 'https://api.github.com',
                pathRewrite: {'^/githubRestApi': ''}
            }
        }
    }
}