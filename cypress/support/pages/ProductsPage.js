class ProductsPage {
  elements = {
    title: () => cy.get('.title'),
    inventoryItems: () => cy.get('.inventory_item'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    activeSortOption: () => cy.get('.active_option'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    addToCartBackpackBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeBackpackBtn: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    itemPrices: () => cy.get('.inventory_item_price')
  }

  // Ações da página
  validatePageLoaded() {
    this.elements.title().should('have.text', 'Products')
    this.elements.inventoryItems().should('have.length.at.least', 1)
  }

  sortBy(optionValue) {
    this.elements.sortDropdown().select(optionValue)
  }

  addBackpackToCart() {
    this.elements.addToCartBackpackBtn().click()
  }

  removeBackpackFromCart() {
    this.elements.removeBackpackBtn().click()
  }
}

export default new ProductsPage()