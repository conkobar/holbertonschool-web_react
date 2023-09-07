const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js', // Entry point for the header
    body: './modules/body/body.js', // Entry point for the body
    footer: './modules/footer/footer.js', // Entry point for the footer
  },
  output: {
    filename: '[name].bundle.js', // Use [name] to dynamically generate filenames
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // This rule will match .css files
        use: ['style-loader', 'css-loader', 'image-webpack-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // This rule will match image files
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/', // Output path for images
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // Set the base directory for serving files
    port: 8564, // Specify the port (you can use any available port)
    open: true, // Automatically open the default web browser
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
};
