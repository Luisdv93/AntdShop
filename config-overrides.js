const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#8F3AE6", // primary color for all components
      "@link-color": "#8F3AE6", // link color
      "@success-color": "#29D271", // success state color
      "@warning-color": "#E6C83A", // warning state color
      "@error-color": "#E63A52" // error state color
    }
  })
);
