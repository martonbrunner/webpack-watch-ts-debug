const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        main: './src/index.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader'],
                exclude: /node_modules/
            }
        ]
    },

    stats: {
        errorDetails: true
    },

    watch: true
};