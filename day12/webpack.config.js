const path = require('path');

module.exports = {
    entry: {
        'App': './jsx/App.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: '[name].js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader', options: { injectType: 'linkTag' } },
                    {
                        loader: 'file-loader',
                        options: { name: '../css/[name].css' },
                    },
                    { loader: 'sass-loader' }
                ],

            }


        ]
    }
};