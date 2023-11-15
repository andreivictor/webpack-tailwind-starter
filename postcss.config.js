const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    // add more postcss plugins here
    // ...

    // https://www.npmjs.com/package/postcss-preset-env
    // it's including autoprefixer by default
    // pass `autoprefixer: false` to disable autoprefixer
    postcssPresetEnv(),
  ],
};
