/// <reference types='Cypress' />
describe('Basic cypress - promise - Alias', function(){
    it('Does not do much', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        //jquery .product:visible as an example
        //alias to support reusing the locator
        cy.get('.products').as('productsLocator')
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //parent child css
        cy.get('@productsLocator').find('.product').should('have.length',4)
        cy.get('@productsLocator').find('.product').eq('2').contains('ADD TO CART').click().then(()=>{
            console.log('Not Cypress, BUT handle by promise manually')
        })
        console.log('Not cypress command, it will be asysn')
        //find Cashews text then click ADD TO CART
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            var vegValue = $el.find('h4.product-name').text()
            if(vegValue.includes('Cashews')){
                $el.find('button').click()
            }       
        })
        //assert if logo text correctly displays
        cy.get('.brand').should('have.text', 'GREENKART')

        //non cypress command text()-jquery can't resolve promise by themself, we have to handle promise by then command
        //print the log by cypress
        cy.get('.brand').then((logoText) =>{
            //cy.log is cypress command and cypress will handle it as syns
            cy.log(logoText.text())
        })
    })
})