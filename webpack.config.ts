module.exports = {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
        },
        // Typescript loader
        {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
        },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
    ],
    resolve: {
      extensions: ['.tsx', '.ts']
    },
  };