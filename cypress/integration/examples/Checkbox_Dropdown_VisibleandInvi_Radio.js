/// <reference types='Cypress' />
describe('Checkboxes - Dropdown - VisibleAndInvisible - Radio button', function(){
    it('Does not do much', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //be. is behaviour and have. is comparing value
        /** Check boxes*/
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //cy.get('input[type="checkbox"]').check() //will check all the check boxes have the same type
        cy.get('input[type="checkbox"]').check(['option2','option3']) //check multiple check boxes instead of all

        /**Drop down static */
        cy.get('select').select('option2').should('have.value', 'option2')

        
        /**Drop down dynamic */
        cy.get('#autocomplete').type('vi')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=>{
            if($e1.text() == 'Vietnam'){
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Vietnam')

        /**Visible and invisible*/
        // cy.get('#displayed-text').should('be.visible')
        // cy.get('#hide-textbox').click()
        // cy.get('#displayed-text').should('not.be.visible')
        // cy.get('#show-textbox').click()
        // cy.get('#displayed-text').should('be.visible')


        /**Radio button */
        cy.get('#radio-btn-example label').each(($e1, index, $list)=>{
            var radioValue = $e1.text()
            if(radioValue.includes('Radio3')){
                $e1.find('input').click()
            }
        })
    })
})