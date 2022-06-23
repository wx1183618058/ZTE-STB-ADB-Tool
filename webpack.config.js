const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/hashcode.js",
    output: {
        path: __dirname + '/dist',
        filename: "hashcode.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
