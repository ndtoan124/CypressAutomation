/// <reference types='Cypress' />

describe('Alert popup - Child tabs - Windows tables - Frame', function(){
    it('Does not do much', function (){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        //Cypress will automatically accept alert popup
        cy.get('#alertbtn').click()
        cy.get('[value=Confirm]').click()
        //window:alert and compare 2 strings
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //Handle child tab: as default, cypress won't recommand to open on other tab
        //we have to use jquery (invoke command) to remove target attribute to keep open on the same tab instead
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        //navigate back to previous page
        cy.go('back')
        //child window
        //grab href value and cy.visit(url) to open child window on the same page
        cy.get('#opentab').then((el)=>{
            var url = el.prop('href')
            //won't work because cypress doesn't allow to change root domain but subdomain, there is only 1 solution is remove target attr
            //cy.visit(url)
        })
        //Window tables
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => { 
            var courseText = $e1.text()
            if(courseText.includes('Python')){
                //how to navigate to immediate sibling: using next() in cypress, next() only works with get()
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    var priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })



    })
})