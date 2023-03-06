describe('testing into a iframe', () => {

    it('should ', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').iframe('body #button-find-out-more > b').should('include.text','Find Out More!')
        cy.get('#frame').iframe('body #div-main-nav > div > ul > li:nth-child(2) > a').should('exist').and('include.text', 'Our Products')
    })
})