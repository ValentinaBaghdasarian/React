"use strict";

module.exports = function (webpackEnv) {
  // ...
  return {
    // ...
    resolve: {
      // ...
      fallback: {
        // 👇️👇️👇️ add this 👇️👇️👇️
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify")
      }
    }
  };
};