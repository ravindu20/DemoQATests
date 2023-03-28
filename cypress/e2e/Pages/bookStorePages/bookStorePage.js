export class bookStorePage{
     //elements
     title_txt = '.main-header'
     search_txt = '#searchBox'
     searchedTitle_txt = '//span[contains(@id,"see-book")]/a'

     title_lbl = '#title-wrapper > .col-md-9 > #userName-value'
     author_lbl = '#author-wrapper > .col-md-9 > #userName-value'
    

     searchBookAndValidateData(bookTitle, author){

        cy.get(this.title_txt).should('have.text','Book Store') 
        cy.get(this.search_txt).type(bookTitle +'{Enter}')
        cy.xpath(this.searchedTitle_txt).should('have.text', bookTitle)
        cy.wait(2000)
        cy.xpath(this.searchedTitle_txt).click()

        //verify details
        cy.get(this.title_lbl).should('have.text',bookTitle) 
        cy.get(this.author_lbl).should('have.text',author) 

        cy.screenshot("SearchBooks")
        
     }
}