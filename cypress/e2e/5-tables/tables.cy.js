describe('dynamic and static tables', () => {
    beforeEach(() => {
        // cy.visit('https://the-internet.herokuapp.com/')
        cy.visit('https://getbootstrap.com/docs/4.0/content/tables/')
    })

    // it('should validation dynamic table', () => {
        // busca el td de la tabla con el valor que nos interesa, luego va hacia la columna anterior que es un check donde busca el input y lo chequea
        // cy.contains('td', 'facebook.com').prev().find('input').check();
    // })

    it('should validation static table', () => {
        // busca el td de la tabla con el valor que nos interesa, luego va hacia la columna anterior que es un check donde busca el input y lo chequea
        // cy.get('.col-md-9 > :nth-child(8)')
        cy.contains('td', 'Mark').next().should('have.text', 'Otto')
        cy.contains('td', 'Jacob').prev().should('have.text', '2')
        cy.contains('td', 'Jacob').next().next().should('have.text', '@fat')
    })
})