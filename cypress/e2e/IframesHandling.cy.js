///<reference types = 'cypress' />
import 'cypress-iframe'
describe('I frame handling approaches', ()=>{

    it('Handle IFrames Approach 1', ()=>{
        cy.visit('https://demoqa.com/frames')
        cy.get('#frame1').then(($iframes)=>{
            let iframeElement = $iframes.contents().find('h1')
            cy.wrap(iframeElement).should('have.text', 'This is a sample page')
        })
    }),
    
    it('Handle IFrames Approach 2', ()=>{
        cy.visit('https://demoqa.com/frames')
        const iframes =  cy.get('#frame1').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
    
        iframes.should('have.text', 'This is a sample page')
        
    }),
    
    it('Handle IFrames Approach 3-Custom Commands', ()=>{
        cy.visit('https://demoqa.com/frames')
        
        cy.switchingToIframes('#frame1')
            .should('have.text', 'This is a sample page')
        
    }),
    
    it('Handle IFrames Approach 4-Iframe plugin', ()=>{
        cy.visit('https://demoqa.com/frames')
        
        cy.frameLoaded('#frame1') //Load the frame
        cy.iframe('#frame1').should('have.text', 'This is a sample page')
    })
})
