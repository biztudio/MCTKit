var webpackConfig = require('../../webpack.config')
module.exports = function(config){
    config.set({
        //Test Framework
        frameworks:['mocha', 'chai'],

        //Test Entry 
        files:[
            './specs/*.spec.js',
        ],

        //preprocessor karma-webpack
        preprocessors:{
            './specs/*.spec.js':['webpack']
        },

        webpack:webpackConfig,
        webpackServer: {
            　　            noInfo: true
            　　        },

        //browsers: ['Phantomjs'],

        /*
        webpackMiddleware:{
        }
        */
        plugins: [
            // Launchers
            //'karma-chrome-launcher',
      
            // Test Libraries
            'karma-mocha',
            'karma-chai',
            //'karma-sinon-chai',
      
            // Preprocessors
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher',

            // Reporters
            'karma-spec-reporter',
            'karma-coverage'
          ],

    })
}