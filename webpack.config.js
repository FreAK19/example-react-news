const path = require('path');

module.exports = {
    entry: './module/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: ['react-hot-loader/webpack', 'babel-loader', 'eslint-loader'],
                exclude: /(node_modules|bower_components)/
            },

            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    }
};