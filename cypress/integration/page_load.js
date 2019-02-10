const url = Cypress.env('url');

describe(`site`, () => {
    it(`should open`, () => {
        cy.visit(url);
        cy.contains(`brandon`);
    });
});