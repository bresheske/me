const url = Cypress.env('url');

describe(`site`, () => {
    it(`should display github profile`, () => {
        cy.visit(url);
        cy.contains(`github profile`)
            .should('have.attr', 'target', '_blank');
    });
    it(`should display github project list`, () => {
        cy.visit(url);
        cy.get(`#github-list`)
            .find('li')
            .should('be.length', 10);
    });
});