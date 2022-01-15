module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              },
            }
          ] 
        }
      ],
    },
  },
};
