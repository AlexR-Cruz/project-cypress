class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  fillUsername(username) {
    if (username) {
      this.elements.usernameInput().clear().type(username)
    } else {
      this.elements.usernameInput().clear()
    }
  }

  fillPassword(password) {
    if (password) {
      this.elements.passwordInput().clear().type(password)
    } else {
      this.elements.passwordInput().clear() // Apenas limpa o campo, sem dar .type()
    }
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  submit() {
    this.elements.loginButton().click()
  }
}

export default new LoginPage()

