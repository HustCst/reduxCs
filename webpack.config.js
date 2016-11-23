module.exports = {
    entry: {
        // 'lesson1': './src/js/index.js',
        'lesson2': './src/js/index2.js',
        // 'lesson3': './src/js/index2.js',
        // 'lesson4': './src/js/index2.js',
        // 'lesson5': './src/js/index2.js',
        // 'lesson6': './src/js/index2.js',
        // 'lesson7': './src/js/index2.js',
        // 'lesson8': './src/js/index2.js',
    },
    output: {
        // 资源目录放置 当前目录(根目录)  也就是说资源需要从根目录开始查找 
        path: './static/out/',
        // 打包文件的路径 （当使用webpack服务是    文件是 static下面的子目录 ）
        filename: '[name].js',
        // 把资源发到 线上地址 
        publicPath: 'http://localhost:8080/static/out/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude:/node_modules/,
            query: {
                presets:['react', 'es2015']
            }
        },{
            test: /\.less$/,
            loader: 'style!css!less'
        },{ 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192'
        }]
    }        
}

// npm  install preset-react / preset-es2015   react-dom 