// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from "mochawesome/addContext";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {

    let parent = runnable.parent;
    let parentTitle = parent.title;

    while (parent.parent?.title) {
      parent = parent.parent;
      parentTitle = `${parent.title} -- ${parentTitle}`;
    }

    const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});

// const xlsx = require('node-xlsx').default; 
// const fs = require('fs'); // for file
// const path = require('path'); // for file path
const xlsx = require('xlsx');
module.exports = (on, config) => {
  initPlugin(on, config);
  on("task", {
  
    generateJSONFromExcel: generateJSONFromExcel,
    
  });
  return config;
   } 

  // Excel To JSON
export function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
  const ws = wb.Sheets[agrs.sheetName];
  return xlsx.utils.sheet_to_json(ws, { raw: false });
}