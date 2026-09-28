class CheckoutPage {
  elements = {
    cartButton: () => cy.get('.shopping_cart_link'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    finishButton: () => cy.get('[data-test="finish"]'),
    completeHeader: () => cy.get('.complete-header')
  }

  fillCustomerInfo(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName)
    this.elements.lastNameInput().type(lastName)
    this.elements.postalCodeInput().type(postalCode)
    this.elements.continueButton().click()
  }

  finishOrder() {
    this.elements.finishButton().click()
  }
}

export default new CheckoutPage()