const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'pathOrUrlWhenProductionBuild',
        // clean: true,
    },
    module: {
        rules: [
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
              },
              {
                test: /\.xml$/i,
                use: ['xml-loader'],
              },
        
        ]
    },
    resolve: {
    },
    devtool: 'source-map',

};
