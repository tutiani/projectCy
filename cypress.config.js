const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 5000,
      // implement node event listeners here
      autest : 'https://automationteststore.com/',
      viewportWidth: 1366,
      viewportHeight: 768
  },
});
