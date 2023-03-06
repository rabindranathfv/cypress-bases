describe('Using fixtures', () => {
    let userDataFix;
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('credentials').then((userData) => {
            userDataFix = userData
        })
    });

    it('should validate login using form', () => {
        const { username, password } = userDataFix
        cy.get('#username').type(`${username}`)
        cy.get('#password').type(`${password}`)
        cy.get('.radius').click()

        cy.get('.subheader').should('include.text', 'Welcome')
    })
})