var path = require('path')
var webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:{
        app:'./src/entry.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
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
    plugins:[
        new CleanWebpackPlugin(
            ['dist/*.bundle.js.map', 'dist/*.bundle.js'],　 //delete mapped file
            { root: __dirname, verbose: true, dry: false}
        )
    ]
}