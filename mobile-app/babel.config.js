module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {},
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            modules: "./src/modules",
            constants: "./src/constants",
            types: "./src/types",
            hooks: "./src/hooks",
            screens: "./src/screens",
            navigation: "./src/navigation",
            utils: "./src/utils",
            reducers: "./src/reducers",
            store: "./src/store",
          },
        },
      ],
    ],
  };
};
