import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
/// <reference types='Cypress' />
import HomePage from '../../pageObjects/HomePage'
import CheckoutPage from '../../pageObjects/CheckoutPage'

    var hP = new HomePage()
    var co = new CheckoutPage()

    Given('I open Ecommerce Page', function(){
        cy.visit(Cypress.env('url'))
    })
    When('I add items to Cart', function(){
        hP.getShopMenuTab().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        hP.getCheckoutButton().click()
    })
    And('Validate the total prices', function(){
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list)=>{
            var res = $e1.text().split(' ')
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        }).then(()=>{
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            var amount = element.text().split(' ')
            var total = amount[1].trim()
            expect(sum).to.equal(Number(total))
        })
    })
    Then('Select the country submit and verify Thank you',function(){
        co.getCheckoutButton().click()
        co.getCountryTextbox().type('France')
        co.getCountrySuggestion().click()
        co.getAgreeCheckbox().click({force: true})
        co.getPurchaseButton().click()
        cy.get('.alert').then((element)=>{
            expect(element.text().includes('Success')).to.be.true
        })
    })

    //When I fill the form details
    When('I fill the form details', function(dataTable){
        hP.getNameTextbox().type(dataTable.rawTable[1][0])
        hP.getGender().select(dataTable.rawTable[1][1])
    })
    Then('Validate from behaviour', function(dataTable){
        hP.getBindingData().should('have.value', dataTable.rawTable[1][0])
        hP.getEntrRadiobutton().should('be.disabled')
        hP.getShopMenuTab().click()
    })