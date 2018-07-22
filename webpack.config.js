const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

let buildFolder = "dist";

module.exports = {
    mode: "development",
    devtool: "source-map",
    // devtool: false,
    watch: true,

    entry: {
        boot: "./src/index"
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, buildFolder)
    },

    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         minSize: 0,
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //                 minSize: 0
    //             }
    //         }
    //     }
    // },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            test:  /\.(sass|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: ['file-loader']
        }, {
            test: /\.html$/,
            use: ['raw-loader']
        }]
    },

    plugins: [
        new CleanWebpackPlugin([`${buildFolder}/*/*.*`]),

        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body',
            hash: false
        })
    ]
};
