const path = require('path');

module.exports = [
  {
    test: /\.tsx?$/,
    include: path.resolve(__dirname, 'src'),
    use: [
      { loader: "babel-loader" },
      { loader: "ts-loader"}
    ]
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: ["file-loader"]
  },
  { 
    test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, 
    loader: 'url-loader?limit=100000&name=[name].[ext]'
  },
  {
    test: /\.css/,
    include: path.resolve(__dirname, "node_modules"),
    use: [
      { loader: "style-loader" },
      { loader: 'css-loader' }
    ]
  },
  {
    test: /\.(sass|scss)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          camelCase: "dashes",
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          outputStyle: "expanded",
          indentedSyntax: "sass",
          includePaths: path.resolve(__dirname, '../sass/main.scss')
        }
      },
      {
        loader: "sass-resources-loader",
        options: {
          resources:  path.resolve(__dirname, '../sass/main.scss')
        }
      }
    ]
  }
];