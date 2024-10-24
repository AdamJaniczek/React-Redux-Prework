const path = require("path");
const entryPath = "01_Projekt_testowy";

module.exports = {
    entry: `./${entryPath}/js/app.js`,
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        //contentBase: path.join(__dirname, `${entryPath}`),
        //publicPath: "/build/",
        static: path.join(__dirname, "01_Projekt_testowy"),
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};