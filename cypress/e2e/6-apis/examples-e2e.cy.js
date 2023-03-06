describe('should login/logout basic Auth with modal and form', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.task('db:teardown')
        cy.task('db:seeding')
     });

    //  ESTE test falla, ya que no esta autenticado
    // it('should can not login', () => {
    //     cy.visit('https://the-internet.herokuapp.com/basic_info')
    //     cy.url().should('eq', 'https://the-internet.herokuapp.com/')
    // })

    it('should can login using alert for input data', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
        // cy.contains('Basic Auth').click()

        cy.get('p').should('include.text', 'Congratulations')
    })

    it('should can login using with a login form', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()

        cy.get('.subheader').should('include.text', 'Welcome')
    })

    it('should send request to authenticate endpoint with forms data and get login sucessfully', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.request({
            method:'POST',
            url: 'https://the-internet.herokuapp.com/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!'
            }
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
        cy.getCookie('rack.session').should('exist')

        cy.visit('https://the-internet.herokuapp.com/secure') // redireccionamos manualmente ya que aqui validamos el request que se hace hacia el backend
        cy.get('.subheader').should('include.text', 'Welcome')
    })
 })