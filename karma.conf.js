module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        files: [
            { pattern: './src/**/*.spec.js', watched: false }
        ],
        frameworks: ['jasmine-ajax', 'jasmine'],
        preprocessors: {
            './src/**/*.spec.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha', 'coverage-istanbul'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        enforce: 'pre',
                        test: /.spec\.js$/,
                        include: /tests/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        enforce: 'post',
                        test: /\.js$|\.jsx$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: { modules: true }
                        },
                        exclude: /node_modules|\.spec\.js$/,
                    },
                    {
                        test: /\.js$/,
                        include: /src/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                ]
            },
            watch: false
        },
        webpackServer: {
            noInfo: true
        },
        coverageIstanbulReporter: {
            reports: [ 'text-summary', 'lcov', 'html' ],
            fixWebpackSourcePaths: true
        },
        singleRun: true,
        sourcemap: true
    });
};