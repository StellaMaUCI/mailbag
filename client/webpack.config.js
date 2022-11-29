const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry : "./src/code/main.tsx",

  resolve : {
    extensions : [ ".ts", ".tsx", ".js" ]
  },

  module : {
    rules : [
      {
        test : /\.html$/,
        use : { loader : "html-loader" }
      },
      {
        test : /\.css$/,
        use : [ "style-loader", "css-loader"]
      },
      {
        test : /\.tsx?$/,
        use : "ts-loader",
        exclude : /node_modules/
      },
    ]

  },

  //Tell Webpack what HTML files to start with via the entry attribute, and it then modifies it as
  // needed (including adding a proper module loader) so that our app can be launched after
  //Webpack has transformed it.
  plugins : [
    new HtmlWebPackPlugin({ template : "./src/index.html", filename : "./index.html" })
  ],

  //by default, Webpack will produce a warning or error, depending on various factors,
  // if the final bundle is over 250Kb. disables this behavior.
  performance : { hints : false },

  //Webpack will watch our source files and automatically rebuild the client if any files change.
  // That gives us that nice, fast turnaround for changes we so liked when working
  // with the server code, but we get it “for free” with Webpack just by adding this attribute!
  watch : true,
  devtool : "source-map"

};
