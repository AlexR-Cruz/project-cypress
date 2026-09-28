class LoginPage {
  // 1. Mapeamento de Seletores (Membros/Propriedades da classe)
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  // 2. Ações que o usuário realiza nessa página (Métodos)
  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  fillUsername(username) {
    this.elements.usernameInput().type(username)
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password)
  }

  submit() {
    this.elements.loginButton().click()
  }

  // Método auxiliar para realizar um login completo em uma única chamada
  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }
}

// Exportamos a instância já criada da classe
export default new LoginPage()

