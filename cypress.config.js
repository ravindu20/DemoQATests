const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: 'vsoqpb',
  video:true,
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // use mochawesome reporter as usually
    screenshotOnRunFailure: true,
    
    screenshotsFolder: "cypress/reports/assets",
   
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
        timestamp: "mmddyyyy_HHMMss"
      }
    },

  },
});
