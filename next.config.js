module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|svg|gif|webp|avif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
    
  },
 
};
