describe('Test for wwww.freerangetesters.com', () => {
    beforeEach(() => {
       cy.visit('www.freerangetesters.com');
    });

    it('should first', () => {
        cy.title().should('include','Free Range Testers');
        cy.get('#comp-l02x1m8d4label').click()
        cy.xpath('//*[@id="comp-l02x1m8d3"]/a/div/div').click()
        cy.contains('Iniciar')
     })
 })