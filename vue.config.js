module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // outputDir: "D:\\dev\\github_repo\\no-tool\\no-tool.github.io", // 构建时输出目录 默认dist
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