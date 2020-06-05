const path = require("path");
const webpack = require("webpack");

module.exports = {
    plugins: [ 
        new webpack.ProvidePlugin({ 
            "jQuery": "jquery", 
            "window.jQuery": "jquery", 
            "jquery": "jquery", 
            "window.jquery": "jquery", 
            "$": "jquery", 
            "window.$": "jquery" 
        }) 
    ],
    
    entry: {
        main: ["./src/js/index.js", "./src/js/common.js"],
        case: ["./src/js/common.js"],
        cases: ["./src/js/common.js"],
        clickhouse: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        contacts: ["./src/js/import/pages/contacts.js", "./src/js/common.js"],
        devops: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        dirs: ["./src/js/import/pages/dirs.js", "./src/js/common.js"],
        docker: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        google: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        kubernetes: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        linux: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        mysql: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        yandex: ["./src/js/import/pages/service.js", "./src/js/common.js"],
        reviews: ["./src/js/import/pages/reviews.js", "./src/js/common.js"],

    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    }
};
