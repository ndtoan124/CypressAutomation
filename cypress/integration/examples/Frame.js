/// <reference types='Cypress' />
/// <reference types='cypress-iframe'/>
import 'cypress-iframe'

describe('Mouse hover', function(){
    it('Does not do much', function (){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //iFrame
        //install plugin: npm install -D cypress-iframe
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*=mentorship]').eq(0).click()
        cy.iframe().find('h1[class*=pricing-title]').should('have.length', 2)

    })
})