var webpackConfig = require('../../webpack.config')
module.exports = function(config){
    config.set({
        //Test Framework
        frameworks:['mocha'],

        //Test Entry 
        files:['./specs/licensecode.spec.js'],

        //preprocessor karma-webpack
        preprocessors:{
            './specs/licensecode.spec.js':['webpack']
        },

        webpack:webpackConfig,

        /*
        webpackMiddleware:{

        }
        */

    })
}