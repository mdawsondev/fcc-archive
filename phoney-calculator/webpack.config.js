module.exports = {
  entry: {
    Main: __dirname + '/src/assets/scripts/_Main.js',
    Vendor: __dirname + '/src/assets/scripts/_Vendor.js'
  },
  output: {
    path: __dirname + '/src/assets/scripts',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
