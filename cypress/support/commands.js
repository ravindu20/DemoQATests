// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'

//
// -- This is a parent command --
Cypress.Commands.add('clickLink', (label) => { 
    cy.get('a').contains(label).click()
 })

 /*this custom commands used to select multiple values from dropdown which <select> tag is not available
 inputElement : element which we used to type the text
 listElement : Suggestion list
 values : List of value which needed to test
 */
 Cypress.Commands.add('selectMultipleValuesFromDropdown', (inputElement, listElement, values) => { 
    for (let i = 0; i < values.length; i++) {
            
        cy.get(inputElement).type(values[i])
        cy.xpath(listElement).each(function ($ele, index, $list) {
            if ($ele.text().includes(values[i])) {
                cy.wrap($ele).click()
            }
            else {
                cy.log($ele.text())
            }
        })
    }

 })

 /*this custom commands used to select date which cannot type
 calenderElement : elemnt of the calender
 dateValue : date which needed to select
 */
 Cypress.Commands.add('selectDate', (calenderElement, dateValue) => { 

    let splitValues = dateValue.split(" ")
    let day = splitValues[0]
    let month = splitValues[1]
    let year = splitValues[2]
    
   
    cy.get(calenderElement).click()
    cy.wait(1000)
    cy.get('.react-datepicker__month-select').select(month)
    cy.wait(1000)
    cy.get('.react-datepicker__year-select').select(year)
    cy.wait(1000)
    cy.xpath('//div[contains(@class, "react-datepicker__day") and contains(text(), "'+day+'")]').click()
    cy.wait(1000)
    // cy.get(calenderElement).should('have.value', dateValue)

 })

/*this custom commands used to navigate through tabs which have target attribute in element
 tabElement : elemnt of the tab navigation button
 */
 Cypress.Commands.add('tabNavigations', (tabElement) => { 

    cy.get(tabElement).then(($btn) => {
        if ($btn.attr('target')) {
            cy.get(tabElement).invoke('removeAttr', 'target').click();
        } else {
            cy.log("No target element")
        }
    })
 })

 /*this custom commands used to switch between iframes
 iframes : elemnt of the iframe
 */
 Cypress.Commands.add('switchingToIframes', (iframes) => { 

    return cy.get(iframes).
     its('0.contentDocument.body').should('be.visible').then(cy.wrap)
 
})

Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
    });

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@4tw/cypress-drag-drop')