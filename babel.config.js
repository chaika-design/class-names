module.exports = {
  presets: [
    [
      "@babel/env"
    ]
  ],
  env: {
    "test": {
      "plugins": [
        "transform-es2015-modules-commonjs",
      ],
    }
  },
};
