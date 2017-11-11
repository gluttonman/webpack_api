/**
 * Created by Lijun on 2017/11/11.
 */
const path = require("path")
const webpack = require("webpack")
const ExtractTextWebpack = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    context: path.resolve(__dirname,"src"),
    entry:{
        yx: "./yx.js",
        vendor: ['react',"react-dom"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "",
        chunkFilename: "[id].[chunkhash].js"
    },
    devServer: {
        contentBase: __dirname + "/dist",
        index: "yx.html",
        port: "4000"
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:["env","react"],
                        "compact" : true
                    }
                },
                exclude:"/node_modules/"
            },
            {
                test:/\.css$/,
                use:ExtractTextWebpack.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(jpe?g|png)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                use:{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "font/",
                        publicPath: "../"
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',  filename:'vendor.js'}),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/yx.tpl.html",
            filename: "yx.html"
        }),
        new ExtractTextWebpack({
            filename: (getPath)=>{
                return getPath('css/[name].css')
            }
        })
    ]
}