const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.resolve.alias = {
    uikit: path.resolve(__dirname, '../lib/ui-kit.js')
  };

  return defaultConfig;
};
