class CheckoutPage{
    getCheckoutButton(){
        return cy.get('button.btn.btn-success')
    }
    getContinueShoppingButton(){
        return cy.get('button.btn.btn-default')
    }
    getCountryTextbox(){
        return cy.get('#country')
    }
    getAgreeCheckbox(){
        return cy.get('#checkbox2')
    }
    getPurchaseButton(){
        return cy.get('input[type=submit]')
    }
    getCountrySuggestion(){
        return cy.get('div.suggestions ul li a')
    }
}
export default CheckoutPage