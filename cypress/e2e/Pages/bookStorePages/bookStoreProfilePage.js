export class bookStroreProfilePage {

    //elements
    title_txt = '.main-header'
    usernameValue_lbl = '#userName-value'
    goToBookStore_btn = '#gotoStore'

    //methods
    navigateToBookStoreApplication(username) {

        cy.get(this.title_txt).should('have.text','Profile') 

        //Verify navigate to the correct account page
        cy.get(this.usernameValue_lbl).should('have.text', username)
        cy.get(this.goToBookStore_btn).click()

        cy.screenshot("bookStore Application page")
    }
}