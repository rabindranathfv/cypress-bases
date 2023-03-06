describe('Assertions ', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('should make implicit validations', () => {
        // Uso de should y el and
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text', 'Inputs')
        cy.get('.example').and('have.class', 'example')
        cy.get('.example').should('have.class', 'example').and('be.visible')
    })

    it('should make implicit validations', () => {
        // USA VALIDACIONES EXPLICITAS DE CHAI
        cy.contains('Inputs').click()
        cy.get('h3')
        // cy.get('.example')
        expect('Inputs').to.equal('Inputs')
        expect('h3').to.exist
        expect('.example').to.exist
    })

    it('should validation using promises', () => {
        let waited = false;

        function waitOneSecond() {
            return new Cypress.Promise((resolve, reject) => {
                setTimeout(() => {
                    waited = true;
                    resolve('foo')
                }, 1000);
            })
        }

        cy.wrap(null).then(() => {
            return waitOneSecond().then((str) => {
                expect(str).to.eq('foo')
                expect(waited).to.be.true
            })
        })
    })
})