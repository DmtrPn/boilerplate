const path = require('path');
require('csscomb');
    require('./.csscomb.json')
module.exports = {
    entry: './src/client/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [
                                'transform-decorators-legacy',
                                'transform-class-properties'
                            ],
                            presets: ['es2015', 'stage-0', 'react']

                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.scss?$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:8000'
        }
    },

    devtool: 'cheap-eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};