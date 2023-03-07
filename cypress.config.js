const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalSessionOrigin: true,
  experimentalSessionSupport: true,
  // testIsolation: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    html: false,
    json: true,
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: false,
  }
})
