// cypress/support/commands.js

Cypress.Commands.add('loginViaApi', (username = 'standard_user') => {
  cy.visit('https://www.saucedemo.com/')
  cy.setCookie('session-username', username)
  cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
})