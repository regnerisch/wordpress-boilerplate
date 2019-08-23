const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const glob = require('glob');

function getAppJsExcludeRegexp() {
    return new RegExp('node_modules\/(?!domestique|ctrly)');
}

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
// https://www.purgecss.com/extractors
class TailwindPurgecssExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

function getStyleLoaders() {
    return [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [
                    require('postcss-import')(),
                    require('postcss-flexbugs-fixes')(),
                    require('postcss-preset-env')({
                        stage: 0,
                        autoprefixer: {
                            flexbox: 'no-2009',
                            grid: true,
                        },
                        features: {
                            'custom-properties': {
                                preserve: false
                            }
                        }
                    }),
                ]
            }
        },
    ];
}

module.exports = (env, argv) => {
    const mode = argv.mode === 'development' ? 'development' : 'production';
    const targetPath = 'public/wp-content/themes/wordpress-boilerplate/assets';

    return {
        mode: mode,
        entry: {
            'main': [
                './assets/webpack-public-path.js',
                './assets/polyfills.js',
                './assets/main/index.js',
            ],
            'icons': [
                './assets/icons/index.css',
                './assets/icons/symbol-defs.svg',
            ]
        },
        output: {
            path: path.resolve(__dirname, targetPath),
            //publicPath: '/app/themes/wordpress-boilerplate/assets/',
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].[contenthash].js',
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    parallel: true,
                    cache: true,
                }),
                new OptimizeCSSAssetsPlugin({
                    parser: require('postcss-safe-parser'),
                    cssProcessorPluginOptions: {
                        preset: ['default', {
                            discardComments: {
                                removeAll: true,
                            },
                        }],
                    },
                }),
            ],
            runtimeChunk: 'single',
        },
        resolve: {
            // Extends the default config by adding the .css extension
            // to allow index.css entry points.
            // See https://webpack.js.org/configuration/resolve/#resolve-extensions
            extensions: ['.wasm', '.mjs', '.js', '.json', '.css'],
            // Extends the default config by adding the es2015 field
            // and removes the browser fields.
            // See https://webpack.js.org/configuration/resolve/#resolve-mainfields
            mainFields: ['es2015', 'module', 'main']
        },
        module: {
            strictExportPresence: true,
            rules: [
                {
                    oneOf: [
                        {
                            test: /\.(js|mjs)$/,
                            exclude: getAppJsExcludeRegexp(),
                            use: [
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        babelrc: false,
                                        configFile: false,
                                        compact: true,
                                        highlightCode: true,
                                        presets: [
                                            [
                                                '@babel/preset-env',
                                                {
                                                    useBuiltIns: 'usage',
                                                    modules: false,
                                                }
                                            ]
                                        ],
                                        plugins: [
                                            '@babel/plugin-syntax-dynamic-import',
                                        ]
                                    },
                                },
                            ],
                        },
                        {
                            test: /\.(js|mjs)$/,
                            use: [
                                {
                                    loader: 'babel-loader',
                                    options: {
                                        babelrc: false,
                                        configFile: false,
                                        cacheDirectory: true,
                                        compact: false,
                                        highlightCode: true,
                                        presets: [
                                            [
                                                '@babel/preset-env',
                                                {
                                                    modules: false,
                                                }
                                            ]
                                        ]
                                    },
                                },
                            ],
                        },
                        {
                            test: /\.css$/,
                            include: /assets\/tailwind/,
                            use: getStyleLoaders().concat(!!argv.watch ? [] : [
                                {
                                    loader: '@americanexpress/purgecss-loader',
                                    options: {
                                        paths: glob.sync(path.join(__dirname, 'public/app/themes') + '/**/*.+(html|php)', {nodir: true}),
                                        extractors: [
                                            {
                                                extractor: TailwindPurgecssExtractor,
                                                extensions: ['php', 'html'],
                                            }
                                        ],
                                    },
                                },
                            ]),
                        },
                        {
                            test: /\.css$/,
                            use: getStyleLoaders(),
                        },
                        {
                            test: /\.(gif|png|jpe?g|svg)$/i,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[name].[hash:8].[ext]',
                                        outputPath: 'img/',
                                    }
                                },
                                {
                                    loader: 'img-loader',
                                    options: {
                                        plugins: mode === 'production' && [
                                            require('imagemin-gifsicle')({
                                                interlaced: true,
                                            }),
                                            require('imagemin-mozjpeg')({
                                                progressive: true,
                                                arithmetic: false,
                                            }),
                                            require('imagemin-optipng')({
                                                optimizationLevel: 5,
                                            }),
                                            require('imagemin-svgo')({}),
                                        ]
                                    }
                                },
                            ],
                        },
                        {
                            test: /\.(woff|woff2|eot|ttf|otf)$/,
                            use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                        name: '[name].[hash:8].[ext]',
                                        outputPath: 'fonts/',
                                    }
                                },
                            ],
                        },
                    ]
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin([targetPath + '/*']),
            // https://webpack.js.org/guides/caching/#module-identifiers
            new webpack.HashedModuleIdsPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:8].css',
                chunkFilename: '[name].[contenthash:8].css',
            }),
            new ManifestPlugin(),
        ]
    };
};
