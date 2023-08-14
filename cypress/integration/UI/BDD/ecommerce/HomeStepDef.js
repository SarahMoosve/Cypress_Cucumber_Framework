import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ShopPage from "../../../../support/pageObject/ShopPage"
import HomePage from "../../../../support/pageObject/HomePage"

const homepage=new HomePage()
const shoppage = new ShopPage()


Given('I open ecommerce page', function() {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I fill the form details', function(dataTable) {
    homepage.getName().type(dataTable.rawTable[1][0])   
    homepage.getEmail().type(dataTable.rawTable[1][1])
    homepage.getGender().select(dataTable.rawTable[1][2])
    homepage.getPassword().type(dataTable.rawTable[1][3])
    homepage.getEmploymentStatus().check()
    homepage.getDateOfBirth().type(dataTable.rawTable[1][4])

}) 

Then('Validate the form behaviour and binding value to be equal to {string}', function(name) {
    homepage.getGender().should('have.value', 'Female')
    homepage.getEmploymentStatus().should('be.checked')
    homepage.getBindingTextField().should('have.value', name)
    homepage.getName().should('have.attr', 'minlength', '2')
    homepage.getDisabledButton().should('be.disabled')
})

Then('Submit it and verify the success message', function(dataTable) {
    homepage.getSubmit().click()
    cy.successMessage(dataTable.rawTable[1][0])
})