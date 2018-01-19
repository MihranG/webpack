const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require ('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin');


const extractLess = new ExtractTextPlugin({
    filename: "main.css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: './source/main.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
    },
    module: {
       rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'  
            }
          }, {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
          
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'myHtml',
            inject: true,
            template: './index.html'
        }),

        // new WatchLiveReloadPlugin({
        //     files: [
        //         // Replace these globs with yours 
        //         './source/'
        //     ]
        // }),
        
       
          
        //extractLess,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};