///<reference types = 'cypress' />

import {bookStroreApplicationPage } from "./Pages/bookStorePages/bookStoreLogInPage";
import { bookStroreProfilePage } from "./Pages/bookStorePages/bookStoreProfilePage";
import { bookStorePage } from "./Pages/bookStorePages/bookStorePage";

const bookStrore_Login = new bookStroreApplicationPage()
const bookStore_Profile = new bookStroreProfilePage()
const bookStore_Page = new bookStorePage()


describe('Book Store Application page scenarions', ()=>{

    it('Login to the application', ()=>{
        cy.fixture('bookApplicationData.json').then((testData) =>{
            bookStrore_Login.navigateToThePage()
            bookStrore_Login.logInToTheAccount(testData.username, testData.password)
            bookStore_Profile.navigateToBookStoreApplication(testData.username)
            bookStore_Page.searchBookAndValidateData(testData.bookTitle, testData.author)
        })
    })
})