// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('Products Page', () => {
  it('should visit the products page', () => {
    cy.visit('http://localhost:8080/');
    cy.server();
    cy.route('GET', 'api/products');
  });
});
