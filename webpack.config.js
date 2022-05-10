const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackObfuscator = require("webpack-obfuscator");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
    
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash:6].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 1234,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "PillowPltCalc",
      filename: "index.html",
      template: "src/template.html",
      favicon: 'src/favicon.png'
    }),

    // new FaviconsWebpackPlugin("./src/assets/favicon.ico"),
    // new BundleAnalyzerPlugin(),

    new WebpackObfuscator(
      {
        rotateStringArray: true,
      },
      ["[name][contenthash:6].js"]
    ),
  ],
  devtool: "source-map",
};
