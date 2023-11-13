const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //type: 'asset/resource',
            type: 'asset/inline',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            
        ],
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), 
            filename: 'index.html', 
            minify:true, //Минификация html
        }),
        
        new CopyWebpackPlugin({
            patterns:[
                { from: path.resolve(__dirname, './src/img'), to:  `./img` },
            ]
          }),
    ],
}