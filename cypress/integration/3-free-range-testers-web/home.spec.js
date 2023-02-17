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

     it.skip('should be using locators for example', () => {
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7')
        // filters
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:enable') // filtrar boton habilitado
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:disabled') // filtrar boton desahabilitado
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:checked') // filtrar chebox, radio button checkado o seleccion
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:empty') // filtrar elementos sin hijos en el html o elementos vacios
        cy.get('#comp-krjaw4p > [data-testid=""linkELement"] > .?1Qjd7:visible') // filtrar elemento visible
    })

    it('should navigate to courses and check amount of course available is going to be 12', () => {
        cy.get('#comp-l02x1m8d2label').click()
        cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 12)
    })

    it('should find contactanos form field name with class has-custom-focus', () => {
        cy.get('#input_comp-l1ed927d').should('have.class', 'has-custom-focus')
    })

    it('should find a link blog on the navigation bar', () => {
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
        // cy.get('#comp-l02x1m8d1label').should('have.value', 'some specific value') for checking specific values
    })

    it('should be a button with content Empeza a aprender', () => {
        cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('exist')
        cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('be.visible')
        cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('have.text', 'Empezá a aprender!')
    })

    it.skip('should check if some checkbox is disabled and checked', () => {
        cy.get('').should('be.disabled')
        cy.get('').should('be.checked')
    })
 })