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

  it('Deve ordenar os produtos por ordem alfabética de A a Z', () => {
    productsPage.sortBy('az')

    productsPage.validateNameOrdering('asc')
  })

  it('Deve ordenar os produtos por ordem alfabética de Z a A', () => {
    productsPage.sortBy('za')

    productsPage.validateNameOrdering('desc')
  })

  it('Deve ordenar os produtos do menor para o maior preço',() => {
    productsPage.sortBy('lohi')

    productsPage.validatePriceOrdering('asc')
  })

  it('Deve ordenar os produtos do maior para o menor preço',() => {
    productsPage.sortBy('hilo')

    productsPage.validatePriceOrdering('desc')
  })

  it('Deve exibir o ícone com número 1 no carringo ao adicionar o primeiro produto', () => {
    productsPage.elements.cartBadge().should('not.exist')

    productsPage.addFirstProductToCart()

    productsPage.elements.cartBadge()
    .should('be.visible')
    .and('have.text', '1')
  })

  it('Deve atualizar dinamicamente a contagem do carrinho ao adicionar múltiplos produtos', () => {
    productsPage.addMultipleProductsToCart(3)

    productsPage.elements.cartBadge()
    .should('be.visible')
    .and('have.text', '3')
  })

  
  // ... restantes testes
})