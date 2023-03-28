export class bookStroreApplicationPage {

    //elements
    title_txt = '.main-header'
    username_txt = '#userName'
    password_txt = '#password'
    logIn_btn = '#login'
   
    navigateToThePage(){
        //Navigate to the URL
        cy.visit('https://demoqa.com/login')
    }

    logInToTheAccount(username, password){

       cy.get(this.title_txt).should('have.text','Login') 
       
        //Enter details and login 
       cy.get(this.username_txt).type(username)
       cy.get(this.password_txt).type(password)
       cy.get(this.logIn_btn).click()

       cy.screenshot("Login to the application")
           
    }

}