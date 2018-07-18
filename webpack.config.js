const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

let buildFolder = "dist";

module.exports = {
    mode: "development",
    devtool: "source-map",
    watch: true,

    entry: {
        boot: "./src/index"
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, buildFolder)
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: ['file-loader']
        }, {
            test: /\.html$/,
            use: ['raw-loader']
        }]
    },

    plugins: [
        new CleanWebpackPlugin([`${buildFolder}/*.*`]),

        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body',
            hash: true
        })
    ]
};
