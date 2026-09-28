// cypress/support/commands.js

Cypress.Commands.add('loginViaApi', (username = 'standard_user') => {
  // 1. Visita a página principal para estabelecer a origem/domínio
  cy.visit('https://www.saucedemo.com/')
  
  // 2. Injeta o cookie que o SauceDemo utiliza para manter a sessão ativa
  cy.setCookie('session-username', username)
  
  // 3. Visita a página interna após ter o cookie injetado
  cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false })
})