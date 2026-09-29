import productsPage from '../support/pages/ProductsPage'
import checkoutPage from '../support/pages/CheckoutPage'

describe('Módulo de Checkout', () => {
  beforeEach(() => {
    cy.loginViaApi('standard_user')
  })

  it('Deve concluir uma compra com sucesso', () => {
    productsPage.addProductToCart()
    checkoutPage.elements.cartButton().click()


    checkoutPage.elements.checkoutButton().click()

    checkoutPage.fillCustomerInfo('Alex', 'Cruz', '12345')
    checkoutPage.finishOrder()


    checkoutPage.elements.completeHeader()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })

  it('Deve exibir mensagem de erro ao tentar avançar no checkout sem preencher os dados', () => {
    productsPage.addProductToCart()
    checkoutPage.elements.cartButton().click()
    checkoutPage.elements.checkoutButton().click()


    checkoutPage.elements.continueButton().click()


    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: First Name is required')
  })
})