describe('Should test UI', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('should use multiple windows, this test include redirections with some workaround', () => {
        cy.contains('Multiple Windows').click()
        // TODO: Agregando el invoke con el remoteAttr y el target evitamos que se abra una pestana nueva del navegador ya que cypress solo valida la pagina del runner
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.contains('New Window').should('have.text', 'New Window') // sino se elimina el target el test falla ya que no encontrara este comportamiento en la misma pagina del runner
    })

    it('should use Shadow DOM', () => {
        cy.contains('Shadow DOM').click()
        // TODO: if the web component is another branch of the doom use shadow, if not is correct is going to give and error
        // cy.get('ul > :nth-child(2)').shadow().should('have.text', 'In a list!')
        cy.get('ul > :nth-child(2)').should('have.text', 'In a list!')
    })

    it('should get first and alst element', () => {
        cy.contains('Dynamic Content').click()
        cy.get('img').first().should('be.visible') // toma el 1ro
        cy.get('img').eq(2).should('be.visible') // evalua la posicion entre 0 y n-1
        cy.get('img').last().should('be.visible') // toma el 2do
    })

    it('should use parent and children', () => {
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent() // retorma el elemento padre de este elemento en el DOM
        cy.get('.example > :nth-child(7)').children() // retorma el elemento hijo de este elemento en el DOM
    })

    // TOD: Example of common invoke use
    // it('should first', () => {
    //     cy.contains('Dynamic Content').should('be.hidden')
    //         .invoke('show')
    //         .should('be.visible')
    // })

})