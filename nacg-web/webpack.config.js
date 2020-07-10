const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env,
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        proxy: {
            '/api/*': {
                target: 'http://lcoalhost:8080'
            }
        },
        plugins: [new HtmlWebpackPlugin()]
    }
}