const GoogleFonts = require("google-fonts-webpack-plugin");

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    new GoogleFonts({
      fonts: [{ family: "Poppins" }, { family: "Open Sans" }]
    })
  ]
};
