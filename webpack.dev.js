const path = require('path');
const {merge} = require('webpack-merge');
const WebpackConfig = require('./webpack.config');

const devWebpackConfig = merge(WebpackConfig, {
    mode: 'development',
    devServer:{
        static: {
            directory: path.join(__dirname)
        },
        client:{
            overlay:true,
        }
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use:[ 
                   {
                    loader:'style-loader',
                   },
                    {
                        loader: 'css-loader',  
                      },{
                        loader: 'sass-loader',
                      }
                    ]
                },
                {
                    test: /\.css$/i,
                    use: [  
                        'style-loader',
                        'css-loader'  
                    ],
                },
        ]
    },
    

});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
});