/// <reference types='Cypress' />
describe('Add to card and checkout simple e2e flow', function(){
    it('Does not do much', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        //jquery .product:visible as an example
        //alias to support reusing the locator
        cy.get('.products').as('productsLocator')

        cy.get('@productsLocator').find('.product').eq('2').contains('ADD TO CART').click()
        //find Cashews text then click ADD TO CART
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            var vegValue = $el.find('h4.product-name').text()
            if(vegValue.includes('Cashews')){
                $el.find('button').click()
            }       
        })
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})