///<reference types = 'cypress' />

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

it('Handling new Browser Window with message and link  as about:blank', function () {
    // cy.visit('https://demoqa.com/browser-windows')
    // cy.window().then((win) => {
    //     cy.stub(win, 'open', url => {
    //         win.location.href = 'about:blank';
    //     }).as("popup")
    // })
    // cy.get('#messageWindowButton').click()
    // cy.get('@popup')
    //     .should("be.called")
    

})