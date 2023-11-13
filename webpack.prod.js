const {merge} = require('webpack-merge');
const WebpackConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildWebpackConfig = merge(WebpackConfig, {
    mode: 'production',
    module: {
        rules: [
                {
                    test: /\.css$/i,
                    use: [ 
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
        ],
    },
    
    plugins: [
        new MiniCssExtractPlugin({
        filename:'style.css', 
      }),
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
  })