const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eerz7u",
  e2e: {

    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    scrollBehavior: "top",
    slowTestThreshold: 10000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    supportFolder: false,
    taskTimeout: 60000,
    testIsolation: true,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: false,
    videoCompression: false,
    videosFolder: "cypress/videos",
    viewportHeight: 1000,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


