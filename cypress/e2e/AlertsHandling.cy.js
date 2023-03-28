///<reference types = 'cypress' />

it('Handle simple alert popups', ()=>{
    cy.visit('https://demoqa.com/alerts')
    cy.get('#alertButton').click()
    cy.on('window:alert', (alertTxt) =>{
        expect(alertTxt).to.contains('You clicked a button')
    })
}),

it('Handle confirm alert popups : OK', ()=>{
    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click()
    cy.on('window:confirm', (alertTxt) =>{
        expect(alertTxt).to.contains('Do you confirm action?')
    })

    cy.get('#confirmResult').should('have.text', 'You selected Ok')
}),

it('Handle confirm alert popups : Cancel', ()=>{
    cy.visit('https://demoqa.com/alerts')
    cy.get('#confirmButton').click()
    cy.on('window:confirm', (alertTxt) =>{
        return false;
        expect(alertTxt).to.contains('Do you confirm action?')
    })

    cy.get('#confirmResult').should('have.text', 'You selected Cancel')
}),

it('Handle prompt box', ()=>{
    cy.visit('https://demoqa.com/alerts')
    cy.window().then((prmptAlert) =>{
        cy.get('#promtButton').click()
        cy.stub(prmptAlert, "prompt").returns("Test Prompt")
        cy.get('#promptResult').contains("Test Prompt")
    })
   
})


