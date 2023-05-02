const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const fs = require('fs')

module.exports = defineConfig({
  projectId: 'vsoqpb',
  video:true,
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout:6000,
    setupNodeEvents(on, config) {
      on('task', {
        generateJSONFromExcel(filename, sheetName) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
          return null
        },
      })
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

    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0
    }
   

  },
});
