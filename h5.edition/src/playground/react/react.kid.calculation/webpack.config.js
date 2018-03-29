const path = require('path');
const webpack = require('webpack');
//const paths = require('./paths');

//process.env.BABEL_ENV = 'production';
//process.env.NODE_ENV = 'production';

//process.env.BABEL_ENV = 'development';
//process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    }
};