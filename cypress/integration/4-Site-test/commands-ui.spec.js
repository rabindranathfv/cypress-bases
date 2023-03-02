describe('UI Test', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('should click Add/Remove Elements and click on addElement and check delete btn', () => {
        cy.contains('Add/Remove Elements').click()
        cy.get('button').click()
        cy.get('.added-manually').should('be.visible')
        cy.get('.added-manually').click()
    })

    it('should click login success and redirect to secure url', () => {
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('should check the checkboxes', () => {
        cy.contains('Checkboxes').click()
        cy.get('#checkboxes > :nth-child(1)').click()
        cy.wait(3000)
        cy.get('#checkboxes > :nth-child(1)').click()

        cy.wait(3000)
        cy.get('#checkboxes > :nth-child(1)').check() // chequeo el checkbox con el metodo check
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

    it('should test select', () => {
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select('Option 2') // seleccionar por el value
        cy.wait(3000)
        cy.get('#dropdown').select(1); // selecciona la opcion por el indice
    })

    it('should test hovers with click and redirections', () => {
        cy.contains('Hovers').click()
        // ELEMENTO INVISIBLE vamos por el selector y con opcion force en el click hacemos que clikee el elemento si o si
        cy.get('#content > div > div:nth-child(4) > div > a').click({ force: true})
    })

    it('should test rigth click', () => {
        cy.contains('Context Menu').click()

        // Metodo 1 si para aplicar click derecho
        cy.get('#hot-spot').rightclick()
        // Metodo 2 para aplicar click derecho
        cy.get('#hot-spot').invoke('trigger', 'contextmenu') // el contextMenu es la funcion que despliegua el click derecho

        cy.on('window:alert', (alert) => {
            expect(alert).to.equal('You selected a context menu')
        })
    })
})