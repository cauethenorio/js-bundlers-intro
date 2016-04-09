var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: "./public",
        //publicPath: "assets",
        filename: 'app-bundle-[hash].js',
        hash: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        //new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.txt$/,
                loader: 'raw'
            },
        ]
    }
};