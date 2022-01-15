module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vmark-loader'
          }
        ] 
      }
    ]
  }
}