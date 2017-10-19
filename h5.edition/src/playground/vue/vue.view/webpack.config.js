var path = require('path')
var webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    entry:{
        app:'./src/entry.js',
        vendor:['vue']
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
    ],
    
    //for webpack-dev-server config
    devServer: {
        contentBase: "./dist",//local server folder root
        historyApiFallback: true,//no re-dirction
        inline: true//hot refresh
    },
    
    //to fix issue: 
    /*[Vue warn]: 
    You are using the runtime-only build of Vue where the template compiler is not available. 
    Either pre-compile the templates into render functions, or use the compiler-included build.
    */
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}