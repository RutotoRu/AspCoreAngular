const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css",
    disable: process.env.NODE_ENV === "development"
});

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
                use: [{ loader: "raw-loader" }]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }           
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].bundle.css"),
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
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, "../src")
        ),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        }),
        // new HtmlWebpackPlugin({
        //     template: "./tuto.page/index.html",
        //     inject: "body",
        //     filename: "index.html"
        // })
    ]
};