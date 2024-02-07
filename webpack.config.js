const path = require("path");
const BomPlugin = require("webpack-utf8-bom");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const PACKAGE = require('./package.json');

const config = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: () => PACKAGE.name + (isProduction ? ".min" : "") + ".js",
    },
    plugins: [
        // new BomPlugin(true),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
    externals: {
        jquery: "jQuery",
    },
    watchOptions: {
        aggregateTimeout: 20,
    },
    optimization: {
        minimize: isProduction,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: true,
            },
            minify: TerserPlugin.uglifyJsMinify,
        })],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};