export class formPage {
    
    //elements
    form_tile = '.category-cards > :nth-child(2)'
    practiceForm_Tab = ':nth-child(2) > .element-list > .menu-list > #item-0'
    firstName_txt = '#firstName'
    lastName_txt = '#lastName'
    email_txt = '#userEmail'
    telephoneNo_txt = '#userNumber'
    subject_txt = '.subjects-auto-complete__value-container'
    subjectSelectOptin = '//div[contains(@class,"auto-complete__option")]'
    multipleSubject_txt = '.subjects-auto-complete__input'
    genderMale_chckBox = '#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'
    dob_txt = '#dateOfBirthInput'
    sport_radioBtn = '#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'
    reading_radioBtn = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label'
    chooseImage_Btn = '#uploadPicture'
    address_TxtArea= '#currentAddress'
    selectState_DropDwn = '#state'
    stateOption = '//div[contains(text(), "NCR")]'
    selectCity_DropDwn = '#city'
    cityOption = '//div[contains(text(), "Delhi")]'

    //methods
    navigateToFormPage(){
        cy.visit('https://demoqa.com/automation-practice-form')
    }

    //methods
    fillForms(firsName, lastName, email, telephone, subject, dob, address, photoPath){
        
        cy.get(this.firstName_txt).type(firsName)
        cy.get(this.lastName_txt).type(lastName)
        cy.get(this.email_txt).type(email)

        cy.get(this.genderMale_chckBox).click()

        cy.get(this.telephoneNo_txt).type(telephone)

        // cy.get(this.dob_txt).clear()
        // cy.get(this.dob_txt).type(dob+'{enter}')

        cy.selectDate(this.dob_txt, dob)
        
        cy.selectMultipleValuesFromDropdown(this.multipleSubject_txt, this.subjectSelectOptin,subject)

        cy.wait(2000)
        
        cy.get(this.sport_radioBtn).click()
        cy.get(this.reading_radioBtn).click()

        cy.get(this.chooseImage_Btn).attachFile(photoPath)

        cy.get(this.address_TxtArea).type(address)

        cy.get(this.selectState_DropDwn).click()
        cy.xpath(this.stateOption).should('be.visible').click()
        cy.wait(2000)

        cy.get(this.selectCity_DropDwn).click()
        cy.xpath(this.cityOption).should('be.visible').click()
        cy.wait(2000)
       
    }
}