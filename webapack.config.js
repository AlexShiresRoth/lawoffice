const path = require('path');

module.exports = {
    entry: './src/javascripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode:'development'
};