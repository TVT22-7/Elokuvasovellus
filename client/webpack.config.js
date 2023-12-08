const path = require('path');

module.exports = {
  entry: './src/index.js',  // Replace with the entry file of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Replace with your desired output directory
  },
  module: {
    rules: [
      // Add any necessary loaders for your project
    ],
  },
  resolve: {
    fallback: {
      timers: require.resolve('timers'),
      stream: require.resolve('stream'),
    },
  },
};