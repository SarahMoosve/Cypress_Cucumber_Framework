import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ShopPage from "../../../../support/pageObject/ShopPage"
import HomePage from "../../../../support/pageObject/HomePage"

const homepage=new HomePage()
const shoppage = new ShopPage()

Given('I open Shop page', function() {
    cy.visit(Cypress.env('url') + "/angularpractice/")
    homepage.getShopTab().click()
})

When('I add items to cart', function(dataTable) {
     // Iterate over all the rows, excluding the header
     for(let i = 1; i < dataTable.rawTable.length; i++) {
        const product = dataTable.rawTable[i][0].trim()
        cy.selectProduct(product)
     }

    shoppage.getCheckout().click();
}) 
Then('Validate the total prices', function() {
    let sum = 0
    shoppage.getAmountOfAll().each(($el, index, $list) => {
        const actualAmount = $el.text()
        const result = actualAmount.split(" ")[1].trim()
        sum += Number(result)
    }).then(function() {
        cy.log(sum)
        shoppage.getTotalAmount().then(function($el) {
            const totalAmount = Number($el.text().split(" ")[1].trim())
            expect(sum).to.equal(totalAmount)
        })
    })
})

Then('Select the country, submit and verify success message.', function(dataTable) {
    shoppage.getProceedToPayment().click()
    shoppage.getLocation().type(dataTable.rawTable[1][1])
    shoppage.getDeliverLocation().click()
    
    
    //Cypress.config('defaultCommandTimeout', 8000)
    
    // Use with caution; forcing interactions should be a last resort.
    shoppage.getCheckout().click({ force: true })

    shoppage.getPurchase().click()
    cy.successMessage(dataTable.rawTable[1][0])
})