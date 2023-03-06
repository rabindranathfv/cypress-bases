describe('Utilities debugg', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('should cy.log utility', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.log('se lleno todo el formulario')
        cy.get('form').contains('Login').click()
        cy.url().should('contains', '/secure')
        cy.wait(3000);
        cy.get('.button').click()
        cy.url().should('contains', '/login')
    })

    it('should cy.pause utility', () => {
        // TODO: el pause() permite manipular los steps en el runner para controlar y ver como van ejecutando los test correctamente
        cy.get('#username').type('tomsmith').pause()
        cy.get('#password').pause().type('SuperSecretPassword!')
        cy.log('se lleno todo el formulario')
        cy.get('form').contains('Login').click()
        cy.url().should('contains', '/secure').pause()
        cy.wait(3000);
        cy.get('.button').click()
        cy.url().should('contains', '/login')
    })

    it('should cy.debug utility', () => {
        // TODO: el debug() tras reiniciar el test en la consola del Runner de cypress se pueden ver detalles de lo seleccionado
        cy.get('#username').type('tomsmith')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.log('se lleno todo el formulario')
        cy.get('form').contains('Login').click()
        cy.url().should('contains', '/secure')
        cy.wait(3000);
        cy.get('.button').click()
        cy.url().should('contains', '/login')
    })
})