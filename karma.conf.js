module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        files: [
            'test/client/**/*test.js'
        ],
        preprocessors: {
            'test/client/**/*test.js': ['webpack']
        },
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        singleRun: true,
        webpack: {
            module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }
    });
};
