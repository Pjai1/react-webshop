// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('Products Page', () => {
  it('should visit the products page', () => {
    cy.visit('/');
  });

  it('should load products', () => {
    cy.seedAndVisit();
    cy.get('.card').should('have.length', 2);
  });
});

describe('Product Detail Page', () => {
  beforeEach(() => {
    cy.visit('/detail');
  });
  it('should visit the product detail page', () => {
    cy.focused().should('have.class', 'form-control');
  });

  it('should accept input', () => {
    const typedText = 'New Id';
    cy.get('#sku')
      .type(typedText)
      .should('have.value', typedText);
  });

  it('should submit the form', () => {
    cy.server();
    const newProduct = {
      title: 'new product',
      price: 123,
      stocked: false,
    };
    cy.route({ url: '/api/products', method: 'POST', response: newProduct }).as(
      'save',
    );
    cy.get('#title').type(newProduct.title);
    cy.get('#price').type(newProduct.price);
    cy.get('.btn-success').click();
    cy.wait('@save').then(xhr => {
      expect(xhr.response.body.title).to.equal(newProduct.title);
      expect(xhr.response.body.price).to.equal(newProduct.price);
      expect(xhr.response.body.stocked).to.equal(newProduct.stocked);
    });
  });
});
