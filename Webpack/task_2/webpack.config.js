const path = require('path');

module.exports = {
  mode: 'production',
  // Adjust the entry point as needed
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // This rule will match .css files
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'image-webpack-loader'],
      },
      {
        // This rule will match image files
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // Output path for images
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
