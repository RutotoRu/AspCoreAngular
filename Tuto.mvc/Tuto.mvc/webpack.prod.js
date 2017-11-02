const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        "app": "./tuto.page/app/main.ts"
    },
    devtool: "cheap-module-eval-source-map",
    output: {
        path: path.join(__dirname, "wwwroot"),
        filename: "js/[name].bundle.js"
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        host: "localhost",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "awesome-typescript-loader",
                    "angular-router-loader",
                    "angular2-template-loader",
                    "source-map-loader",
                    "tslint-loader"
                ]
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                use: "file-loader?name=assets/[name].[ext]"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loaders: ["to-string-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name]-[hash:6].bundle.css"),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new CleanWebpackPlugin(
            [
                "./wwwroot/js/",
                "./wwwroot/css/",
                "./wwwroot/assets/",
                "./wwwroot/index.html"
            ]
        ),
        // inject in index.html
        new HtmlWebpackPlugin({
            template: "./tuto.page/index.html",
            inject: "body",
            filename: "index.html"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        })
    ]
};