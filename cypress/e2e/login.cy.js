import LoginPage from '../support/pages/LoginPage'

describe('Módulo de Autenticação', () => {
  let user 

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      user = data
    })
    
    LoginPage.visit()
  })

  it('Deve realizar login com sucesso', () => {
    LoginPage.login(user.usuarioValido.username, user.usuarioValido.password)

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    LoginPage.login(user.usuarioInvalido.username, user.usuarioInvalido.password)

    LoginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('Deve exibir mensagem de erro ao inserir somente o username nas credenciais', () => {
    LoginPage.login(user.usuarioValido.username,'')

    LoginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain', 'Password is required')
  })

  it('Deve impedir o acesso de um utilizador bloqueado', () => {
    LoginPage.login(user.usuarioBloqueado.username, user.usuarioBloqueado.password)

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })
})