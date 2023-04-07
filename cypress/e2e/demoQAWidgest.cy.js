///<reference types = 'cypress' />

import { accordianPage} from "./Pages/accordianPage";

const accordian_Page = new accordianPage()

beforeEach('Navigate to panel',()=>{
    cy.visit('https://demoqa.com/widgets')
    // cy.visit('https://google.com')
})

describe('Widget handles', ()=>{
    it('Widgest - Accordian test', ()=>{
        // accordian_Page.navigateToFormPage()
        accordian_Page.testAccordians()
    })
    
    it('Widgets Auto Complete', ()=>{
        accordian_Page.testAutoComplete()
    })
    
    it('Widgets Date Picker', ()=>{
        accordian_Page.testDatePicker()
    })
    
    it('Widgets Progress Bar', ()=>{
        accordian_Page.testProgressBar()
    })
    
    it('Widgets Tabs', ()=>{
        accordian_Page.testTabSelect()
    })
    
    it('Widgets Tool Tips', ()=>{
        accordian_Page.testToolTips()
    })
    
    it.only('Widgets Menu', ()=>{
        accordian_Page.testMenu()
    })
    
    it('Widgets Select Menu', ()=>{
        accordian_Page.testSelectMenu()
    })
})


