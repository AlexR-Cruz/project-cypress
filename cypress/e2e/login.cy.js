import LoginPage from '../support/pages/LoginPage'

describe('Módulo de Autenticação', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Deve realizar login com sucesso', () => {
    LoginPage.login('standard_user', 'secret_sauce')


    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    LoginPage.login('usuário_inválido', 'senha inválida')

    LoginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('Deve impedir o acesso de um utilizador bloqueado', () => {
    LoginPage.login('locked_out_user', 'secret_sauce')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })
})