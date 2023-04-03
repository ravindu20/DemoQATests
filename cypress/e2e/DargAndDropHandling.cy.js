///<reference types = 'cypress' />

beforeEach('Navigate to web site', () => {
    cy.visit('https://demoqa.com/droppable')
})

it('Handle drag and drop', () => {

    cy.get('#simpleDropContainer').invoke('offset').then((offset) => {
        const x = offset.left;
        const y = offset.top;
        cy.log(`The element is located at (${x}, ${y})`);
    });
 
    cy.get('#draggable').drag('#simpleDropContainer', { target: { x: 300, y: 100 }, force: true })
    cy.get('#simpleDropContainer > #droppable > p').should('have.text', 'Dropped!')
})

it('Handle drag and drop - Acceptable', () => {

    cy.get('#droppableExample-tab-accept').click()
    cy.get('#acceptable').drag('#acceptDropContainer > #droppable', { target: { x: 100, y: 100 }, force: true })
    cy.get('#acceptDropContainer > #droppable > p').should('have.text', 'Dropped!')
})

it('Handle drag and drop - NotAcceptable', () => {

    cy.get('#droppableExample-tab-accept').click()
    cy.get('#notAcceptable').drag('#acceptDropContainer > #droppable', { target: { x: 100, y: 100 }, force: true })
    cy.get('#acceptDropContainer > #droppable > p').should('have.text', 'Drop here')
})

it('Handle drag and drop - Prevent Propogation-Outer', () => {

    cy.get('#droppableExample-tab-preventPropogation').click()
    cy.get('#dragBox').drag('#notGreedyDropBox', { target: { x: 100, y: 100 }, force: true })
    cy.get('#notGreedyDropBox > :nth-child(1)').should('have.text', 'Dropped!')
})

it('Handle drag and drop - Prevent Propogation-Middle', () => {

    cy.get('#droppableExample-tab-preventPropogation').click()
    cy.get('#dragBox').drag('#greedyDropBoxInner', { target: { x: 100, y: 100 }, force: true })
    cy.get('#greedyDropBoxInner > p').should('have.text', 'Dropped!')

})