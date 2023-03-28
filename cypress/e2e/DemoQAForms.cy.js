import {formPage} from './Pages/FormsPage'

const form_Page = new formPage()

describe('Demo QA Fill Forms', () => {
  it('Fill Forms', () => {

    cy.fixture('FormData.json').then((formData) => {

      formData.forEach(data => {

        form_Page.navigateToFormPage()

        form_Page.fillForms(data.firstName, data.lastName, data.email,
          data.telephonNo, data.subject, data.dob, data.current_address, data.photoPath)
      
        })
    });

  })
})