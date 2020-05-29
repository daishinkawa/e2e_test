const {defaults} = require('jest-config');

module.exports = {
  verbose: true,
  preset: "jest-puppeteer",
  setupFilesAfterEnv: [
    `${process.cwd()}/jest.setup.js`
  ],
  moduleDirectories: [
    "node_modules",
    "utils"
  ]
}