import productsPage from '../support/pages/ProductsPage'

describe('Módulo de Catálogo / Produtos', () => {
  beforeEach(() => {
    // Realiza a autenticação rápida via cookie e acessa o catálogo
    cy.loginViaApi('standard_user')
  })

  it('Deve carregar a lista de produtos corretamente', () => {
    productsPage.validatePageLoaded()
    productsPage.elements.inventoryItems().should('have.length', 6)
  })

  it('')
  // ... restantes testes
})