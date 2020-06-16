// need to use object syntax, cf.
// https://nextjs.org/docs/advanced-features/customizing-postcss-config

module.exports = {
  plugins: { tailwindcss: {}, "postcss-preset-env": {} },
};
