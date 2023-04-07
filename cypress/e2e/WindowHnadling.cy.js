///<reference types = 'cypress' />
import {commonFunc, getRandomNum} from '../support/commonMethods'

describe('Handling windows', ()=>{
    it('Handling new Browser Window', function () {
        cy.visit('https://demoqa.com/browser-windows')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as("popup")
        })
        cy.get('#windowButton').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'This is a sample page')
    })
    
})

