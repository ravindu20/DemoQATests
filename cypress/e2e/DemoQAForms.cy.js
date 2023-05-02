import {formPage} from './Pages/FormsPage'
import {excelDataToJsonFile} from '../support/commonMethods'
import { generateJSONFromExcel } from '../support/e2e'
const form_Page = new formPage()
const xlsx = require('xlsx');
describe('Demo QA Fill Forms', () => {
  it('Fill Forms', () => {

    cy.fixture('FormData.json').then((formData) => {

      formData.forEach(data => {

        form_Page.navigateToFormPage()

        form_Page.fillForms(data.firstName, data.lastName, data.email,
          data.telephonNo, data.subject, data.dob, data.current_address, data.photoPath)
      
        })
    });

  }),

  // it.only('Fill Forms with excel to JSON convert', () => {

  //   cy.parseXlsx('cypress/fixtures/data.xlsx').then( (jsonData) =>
  //   { const rowLength = Cypress.$(jsonData[0].data).length
  //      for (let index = 0; index < rowLength; index++)
  //       { 
  //         var jsonData = jsonData[index].data 
  //         console.log(jsonData[index].data)
  //         cy.writeFile("cypress/fixtures/xlsxData.json", {firstName:jsonData[1][0], lastName:jsonData[1][1], email:jsonData[1][2],
  //           telephonNo:jsonData[1][3], subject:jsonData[1][4], current_address:jsonData[1][5], photoPath:jsonData[1][6]})
  //       }
  //   })

  //   cy.fixture('xlsxData.json').then((formData) => {

  //     formData.forEach(data => {

  //       form_Page.navigateToFormPage()

  //       form_Page.fillForms(data.firstName, data.lastName, data.email,
  //         data.telephonNo, data.subject, data.dob, data.current_address, data.photoPath)
      
  //       })
  //   });

  // })

  it.only('Fill Forms with excel to JSON convert', () => {

    form_Page.navigateToFormPage()

    
    const workbook = xlsx.readFile('../fixtures/data.xlsx');

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    cy.log(jsonData)
    // jsonData.forEach(row => {

    //   cy.get('#firstName').type(row.firsName)
    //   cy.get('#lastName').type(row.lastName)
    //   cy.get('#userEmail').type(row.email)

    //   cy.get(this.genderMale_chckBox).click()

    //   cy.get('#userNumber').type(row.telephone)

    //   cy.wait(2000)
      
    //   cy.get('#uploadPicture').attachFile(row.photoPath)

    //   cy.get('#currentAddress').type(row.address)

    //   cy.get('#state').click()
    //   cy.xpath('//div[contains(text(), "NCR")]').should('be.visible').click()
    //   cy.wait(2000)

    //   cy.get('#city').click()
    //   cy.xpath('//div[contains(text(), "Delhi")]').should('be.visible').click()
    //   cy.wait(2000)
    // });
    
  
    })

  it('Fill Forms with excel to JSON convert - 3', () => {

      form_Page.navigateToFormPage()
  
    const excelFilePath =
      "D:\\Tutorials\\Cypress\\DemoQATests\\cypress\\data.xlsx";
    const sheetName = "Sheet1";
    //Act
    // Replace cy.fixture with task to read dat from excel and convert that into json
    cy.task('generateJSONFromExcel', { excelFilePath, sheetName }).then(
      (user) => {
        cy.get('#firstName').type(user[0].firstName)
        cy.get('#lastName').type(user[0].lastName)
        cy.get('#userEmail').type(user[0].email)

        cy.get('#userNumber').type(user[0].telephone)

        cy.wait(2000)

        cy.get('#uploadPicture').attachFile(user[0].photoPath)

        cy.get('#currentAddress').type(user[0].address)

        cy.get('#state').click()
        cy.xpath('//div[contains(text(), "NCR")]').should('be.visible').click()
        cy.wait(2000)

        cy.get('#city').click()
        cy.xpath('//div[contains(text(), "Delhi")]').should('be.visible').click()
        cy.wait(2000)
      }
    );
  })

})