const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@ui-kitten/components",
          "@codler",
          "react-router-native",
        ],
      },
    },
    argv
  );
  return config;
};
