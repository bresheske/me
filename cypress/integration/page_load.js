const env = require('../env')['local'];

describe(`site`, () => {
    it(`should open`, () => {
        cy.visit(env.url);
        cy.contains(`brandon`);
    });
});