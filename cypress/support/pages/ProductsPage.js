class ProductsPage {
  elements = {
    title: () => cy.get('.title'),
    inventoryItems: () => cy.get('.inventory_item'),
    inventoryItemNames: () => cy.get('.inventory_item_name'),
    inventoryItemPrices: () => cy.get('.inventory_item_price'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    activeSortOption: () => cy.get('.active_option'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    addToCartBtn: (index = 0) => cy.get('.btn_inventory').eq(index),
    removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
  }

  // Ações da página
  validatePageLoaded() {
    this.elements.title().should('have.text', 'Products')
    this.elements.inventoryItems().should('have.length.at.least', 1)
  }

  sortBy(optionValue) {
    this.elements.sortDropdown().select(optionValue)
  }

  validateNameOrdering(direction = 'asc') {
    // Captura os nomes de todos os produtos exibidos na tela
    this.elements.inventoryItemNames().then(($elements) => {
      // Extrai o texto de cada elemento HTML
      const displayedNames = Cypress._.map($elements, 'innerText')

      // Cria uma cópia da lista e ordena via JavaScript
      const sortedNames = [...displayedNames].sort((a, b) => {
        return direction === 'asc'
        ? a.localeCompare(b)
        : b.localeCompare(a)
      })

      // Valida se a lista da tela é exatamente igual à lista ordenada
      expect(displayedNames).to.deep.equal(sortedNames)
    })
  }

  validatePriceOrdering(direction = 'asc') {
    this.elements.inventoryItemPrices().then(($elements) => {
      const displayedPrices = Cypress._.map($elements, (el) => {
        return parseFloat(el.innerText.replace('$', ''))
      })

      const sortedPrices = [...displayedPrices].sort((a, b) => {
        return direction === 'asc' ? a - b : b - a
      })

      expect(displayedPrices).to.deep.equal(sortedPrices)
    })
  }

  addProductToCart(index = 0) {
    this.elements.addToCartBtn(index).click()
  }

  addMultipleProductsToCart(count) {
    for (let i = 0; i < count; i++) {
      this.elements.addToCartBtn(i).click()
    }
  }

  removeBackpackFromCart() {
    this.elements.removeBackpackBtn().click()
  }
}

export default new ProductsPage()