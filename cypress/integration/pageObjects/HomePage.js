class HomePage{
    getNameTextbox(){
        return cy.get('div.form-group input[name=name]')
    }
    getBindingData(){
        return cy.get('h4 input[name=name]')
    }
    getGender(){
        return cy.get('select')
    }
    getEmailTextbox(){
        return cy.get('div.form-group input[name=email]')
    }
    getPasswordTextbox(){
        return cy.get('#exampleInputPassword1')
    }
    getShopMenuTab(){
        return cy.get('.navbar-nav li:nth-child(2)')
    }  
    getEntrRadiobutton(){
        return cy.get('#inlineRadio3')
    }      
    getCheckoutButton(){
        return cy.get('a.nav-link.btn.btn-primary')
    }
}
export default HomePage