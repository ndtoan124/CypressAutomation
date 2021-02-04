/// <reference types='Cypress' />
describe('Mouse hover', function(){
    it('Does not do much', function (){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //Mouse Over - by default, Cypress doesn't support but we can use jquery to leverage mouse over action
        //Show should apply on direct parent element to display all the child elements
        //cy.get('div.mouse-hover-content').invoke('show') //this step usually to verify the pop up when mouse hover
        //with click{force: true} which force to clicl on invisible element
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

    })
})