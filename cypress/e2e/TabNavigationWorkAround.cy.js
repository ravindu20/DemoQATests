///<reference types = 'cypress' />

// beforeEach('Navigate to web site',()=>{
//     // cy.visit('https://practice.automationbro.com/')
//     cy.visit('https://demoqa.com/links')
// })
describe('Tab navigation Approaches', ()=>{

    it('Tab Navigation workaround without target attr.', ()=>{
        cy.visit('https://demoqa.com/browser-windows')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as("popup")
        })
        cy.get('#tabButton').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'This is a sample page')
        
            cy.wait(5000)
    }),
    
    it('Tab Navigation workaround with target attr.', () => {
    
        cy.visit('https://practice.automationbro.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        
        // Switch to the new tab
        // cy.window().then((win) => {
        //     win.focus()
        // })
        cy.get('h1').should('have.text', 'Contact')
    
        // Switch back to the original tab
        // cy.window().then((win) => {
        //     win.opener.focus()
        // })
    }),
    
    it('Tab Navigation common method', () => {
    
        cy.visit('https://practice.automationbro.com/')
        cy.tabNavigations('#contact-us')
        cy.get('h1').should('have.text', 'Contact')
    })
})


