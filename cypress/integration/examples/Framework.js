/// <reference types='Cypress' />
import HomePage from '../pageObjects/HomePage'
import CheckoutPage from '../pageObjects/CheckoutPage'

describe('Fixture', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data = data
        })
    })
    it('Hook', function (){
        var hP = new HomePage()
        var co = new CheckoutPage()

        cy.visit(Cypress.env('url'))
        hP.getNameTextbox().type(this.data.name)
        hP.getGender().select(this.data.gender)
        hP.getBindingData().should('have.value', this.data.name)
        //cy.get('input[name=name]:nth-child(2)').should('have.attr', 'minlength', '2')
        hP.getEmailTextbox().type(this.data.email)
        hP.getPasswordTextbox().type('bob123')
        //cy.get('#exampleCheck1').check()
        hP.getEntrRadiobutton().should('be.disabled')
        hP.getShopMenuTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        //cypress support debug by cy.pause() or cy.debug()
        //Checkout
        hP.getCheckoutButton().click()
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
        
        co.getCheckoutButton().click()
        co.getCountryTextbox().type('France')
        //Cypress.config just apply only specific .js not entirely framework
        //Cypress.config('detaultCommandTimeout', 10000)
        co.getCountrySuggestion().click()
        
        co.getAgreeCheckbox().click({force: true})
        co.getPurchaseButton().click()
        cy.get('.alert').then((element)=>{
            expect(element.text().includes('Success')).to.be.true
        })

    })
})