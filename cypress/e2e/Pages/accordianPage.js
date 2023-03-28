export class accordianPage{

widget_Tile= 'Widgets'
accordian_Tab= 'Accordian'
autoCompleteTab_Tab= 'Auto Complete'
datePicker_Tab = 'Date Picker'
slider_Tab = 'Slider'
progressBar_Tab = ':nth-child(4) > .element-list > .menu-list > #item-4'
tabs_Tab = 'Tabs'
toolTips_Tab = 'Tool Tips'
Menu_Tab = 'Menu'
selectMenu_Tab = 'Select Menu'

accordianTitlePane1= '#section1Heading'
accordianTitlePane2= '#section2Heading'
accordianTitlePane3= '#section3Heading'

multipleColorSelect = '#autoCompleteMultipleContainer'
multiSelectOptin = '//div[contains(@class,"auto-complete__option")]'

datepicker_Locater = '#datePickerMonthYearInput'
dateTimepicker_Locater = '#dateAndTimePickerInput'

slider_elm = '.range-slider'
sliderValue_elm = '#sliderValue'

progressBar_Btn = '#startStopButton'

originTab = '#demo-tab-origin'
originTabPaneText = '#demo-tabpane-origin > .mt-3'
userTab ='#demo-tab-use'
useTabPaneText = '#demo-tabpane-use > .mt-3'

toolTip_Btn = '#toolTipButton'
toolTipBtn_Hover = '#buttonToolTip'
toolTip_TxtField = '#toolTipTextField'
toolTipTxtField_Hover ='#textFieldToolTip'
toolTip_LinkContainer = '#texToolTopContainer > :nth-child(1)'
toolTipLinkContainer_Hover ='#contraryTexToolTip'

menuItem2 = 'Main Item 2'
SubMenuItem = 'SUB SUB List'
SubSubMenuItem = 'Sub Sub Item 1'

selectValueDrpDown = '#withOptGroup > .css-yk16xz-control > .css-1hwfws3'
slectValueOption = '//div[contains(text(), "Group 2, option 1")]'
selectOneDrpDown = '#selectOne > .css-yk16xz-control > .css-1hwfws3'
slectOneOption = '//div[contains(text(), "Prof")]'
selectOldStyleDrpDown = '#oldSelectMenu'




//methods
navigateToFormPage(){
    cy.visit('https://demoqa.com/')
    cy.wait(5000)
    cy.contains(this.widget_Tile).click()
    cy.wait(5000)
    
}

testAccordians(){
    cy.contains(this.accordian_Tab).click()
    cy.wait(2000)
    cy.get(this.accordianTitlePane1).click()
    cy.wait(2000)
    cy.get(this.accordianTitlePane2).click()
    cy.wait(2000)
    cy.get(this.accordianTitlePane3).click()
}

testAutoComplete(){

    cy.contains(this.autoCompleteTab_Tab).click()
    cy.wait(2000)

    cy.get(this.multipleColorSelect).type('r')

    cy.xpath(this.multiSelectOptin).each(function($ele, index, $list){
        if($ele.text().includes('Red') || $ele.text().includes('red')){
            cy.wrap($ele).click()
        }
        else{
            cy.log($ele.text())
        }
    })

   
}

testDatePicker(){
    cy.contains(this.datePicker_Tab).click()
    cy.wait(2000)

    cy.get(this.datepicker_Locater).clear()
    cy.get(this.datepicker_Locater).type('06/10/2023 {enter}')
    cy.wait(2000)
    cy.get(this.dateTimepicker_Locater).clear()
    cy.get(this.dateTimepicker_Locater).type('June 13, 2023 4:30 PM {enter}')
}

testSlider(){
    cy.contains(this.slider_Tab).click()
    cy.wait(2000)

    cy.get(this.slider_elm).invoke("val", "60").trigger("change")
    cy.get(this.sliderValue_elm).should("have.value", "60")
    
}

testProgressBar(){
    cy.get(this.progressBar_Tab).click()
    cy.wait(2000)

    cy.get(this.progressBar_Btn).click()
    cy.wait(100)
    cy.get(this.progressBar_Btn).click()
    
}

testTabSelect(){
    cy.contains(this.tabs_Tab).click()
    cy.wait(2000)
    
    cy.get(this.originTab).click()
    cy.wait(2000)
    cy.get(this.originTabPaneText).should('be.visible')
    
    cy.get(this.userTab).click()
    cy.wait(2000)
    cy.get(this.useTabPaneText).should('be.visible')
    
}

testToolTips(){
    cy.contains(this.toolTips_Tab).click()
    cy.wait(2000)

    cy.get(this.toolTip_Btn).trigger('mouseover')
    cy.get(this.toolTipBtn_Hover).should('be.visible')
    cy.wait(2000)
    cy.get(this.toolTip_TxtField).trigger('mouseover')
    cy.get(this.toolTipTxtField_Hover).should('be.visible')
    cy.wait(2000)
    cy.get(this.toolTip_LinkContainer).trigger('mouseover')
    cy.get(this.toolTipLinkContainer_Hover).should('be.visible')
    cy.wait(2000)
    
}

testMenu(){
    cy.contains(this.Menu_Tab).click()
    cy.wait(2000)

    // cy.contains(this.menuItem2).trigger('mouseover')
    
    // cy.get('#nav > :nth-child(2) > :nth-child(1)').within(($ele) => {
    //     cy.wrap($ele).click()
    //   })
    cy.clickLink('Main Item 2')
    // cy.contains(this.SubMenuItem).should('be.visible')
    // cy.wait(2000)
    // cy.contains(this.SubMenuItem).click()
    // cy.contains(this.SubSubMenuItem).should('be.visible')
    // cy.wait(2000) 
    
    
}

testSelectMenu(){
    cy.contains(this.selectMenu_Tab).click()
    cy.wait(2000)

    cy.get(this.selectValueDrpDown).click()
    cy.xpath(this.slectValueOption).should('be.visible').click()
    cy.wait(2000)

    cy.get(this.selectOneDrpDown).click()
    cy.xpath(this.slectOneOption).should('be.visible').click()
    cy.wait(2000)

    cy.get(this.selectOldStyleDrpDown).select('Red')
    cy.wait(2000)

    // Multi Select

    cy.get('#cars').select(['Saab', 'Opel'])
}

}