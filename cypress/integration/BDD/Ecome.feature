Feature: E2E Ecommerce validation


    Application Regression
    
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify Thank you

    Scenario: Fill the form details
    Given I open Ecommerce Page
    When I fill the form details
    | name | gender |
    | testing | Female |
    Then Validate from behaviour