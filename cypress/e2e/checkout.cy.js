import productsPage from '../support/pages/ProductsPage'
import checkoutPage from '../support/pages/CheckoutPage'

describe('Módulo de Checkout', () => {
  beforeEach(() => {
    cy.loginViaApi('standard_user')
  })

  it('Deve concluir uma compra com sucesso', () => {
    // 1. Adiciona item ao carrinho
    productsPage.addBackpackToCart()
    checkoutPage.elements.cartButton().click()

    // 2. Inicia o checkout
    checkoutPage.elements.checkoutButton().click()

    // 3. Preenche formulário de envio e finaliza
    checkoutPage.fillCustomerInfo('Alex', 'Cruz', '12345')
    checkoutPage.finishOrder()

    // 4. Valida mensagem de sucesso
    checkoutPage.elements.completeHeader()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
  })

  it('Deve exibir mensagem de erro ao tentar avançar no checkout sem preencher os dados', () => {
    productsPage.addBackpackToCart()
    checkoutPage.elements.cartButton().click()
    checkoutPage.elements.checkoutButton().click()

    // Clica em continuar sem preencher nada
    checkoutPage.elements.continueButton().click()

    // Valida a mensagem de erro do formulário
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: First Name is required')
  })
})