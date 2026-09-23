// cypress/support/commands.js

Cypress.Commands.add('loginViaApi', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://restful-booker.herokuapp.com/auth',
    body: {
      username: username,
      password: password
    }
  }).then((response) => {
    // Garante que a API respondeu com sucesso (HTTP 200)
    expect(response.status).to.eq(200)
    
    // Salva o token gerado em um Cookie no navegador
    cy.setCookie('token', response.body.token)
  })
})