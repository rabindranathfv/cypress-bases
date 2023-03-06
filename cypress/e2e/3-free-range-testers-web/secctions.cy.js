const pages = require('../../fixtures/titles.json')

describe('Test diferents tabs', () => {

    pages.forEach(page => {
        it(`should check title page from ${page.location}`, () => {
            cy.visit(`${page.location}`)
            cy.title().should('include', `${page.title}`)
        })
    });
})