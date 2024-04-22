module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Ensures that Babel compiles JavaScript to match the version of Node.js that you are currently running.
        },
      },
    ],
    "@babel/preset-typescript", // Add this line to handle TypeScript files
  ],
};
