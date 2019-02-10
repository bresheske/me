const env = require('../env')['local'];

describe(`site`, () => {
    it(`should display github profile`, () => {
        cy.visit(env.url);
        cy.contains(`github profile`)
            .should('have.attr', 'target', '_blank');
    });
    it(`should display github project list`, () => {
        cy.visit(env.url);
        cy.get(`#github-list`)
            .find('li')
            .should('be.length', 10);
    });
});