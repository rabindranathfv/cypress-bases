describe('Should test UI', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('should use multiple windows', () => {
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
})