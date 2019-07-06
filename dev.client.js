const path = require('path')
const webpack = require('webpack')

module.exports = {
    //...
    entry: {
        client: [
            'webpack-dev-server/client?http://localhost:9000/',
            'webpack/hot/dev-server',
            "./reactor/client.js"],
        style: "./public/assets/css/styles.css"
    },
    output: {
        filename: 'bundle.dev.js',
        publicPath: 'http://localhost:9000/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ["/node_modules/"],
                loaders: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["css-loader"],
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                use: "ignore-loader",
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 9000,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },

    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: true,
            __CLIENT__: true,
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};