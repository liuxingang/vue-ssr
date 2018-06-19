
module.exports = (isDev) => {
    return {
        preserveWhitespace: true, // html节点结尾 消除空格
        extractCSS: !isDev, // 把vue文件里面的样式也打包出去，vue-cli 默认是false
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // 生成唯一的class 名
            camelCase: true
        },
        // hotReload: false, //根据环境变量生成
    }
}