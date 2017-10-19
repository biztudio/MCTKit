var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry:{
        app:'./src/entry.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '../dist',
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },            
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif)(\?\S*)?$/,
                loader: "file-loader",
                query: {
                    name: 'assets/[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}