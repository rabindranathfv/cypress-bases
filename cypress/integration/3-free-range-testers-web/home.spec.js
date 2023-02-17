describe('Test for wwww.freerangetesters.com', () => {
    beforeEach(() => {
       cy.visit('www.freerangetesters.com');
    });

    it('should first basics web elements', () => {
        cy.title().should('include','Free Range Testers');
        cy.get('#comp-l02x1m8d4label').click()
        cy.xpath('//*[@id="comp-l02x1m8d3"]/a/div/div').click()
        cy.contains('Iniciar')
     })

     it('should be using locators for example', () => {
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7')
        // filters
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:enable') // filtrar boton habilitado
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:disabled') // filtrar boton desahabilitado
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:checked') // filtrar chebox, radio button checkado o seleccion
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:empty') // filtrar elementos sin hijos en el html o elementos vacios
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:visible') // filtrar elemento visible
       })
 })