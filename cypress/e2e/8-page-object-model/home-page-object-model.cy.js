import FreeRangeHome from "../pages/HomePageObj"

describe('Should test home of freerangetesters with Page Object Model', () => {
    let homePage;
    beforeEach(() => {
        homePage = new FreeRangeHome();
        homePage.navigateToHome()
     });

    it('should be a button with content Empeza a aprender WITH POM', () => {
        homePage.startBtn()
        homePage.startBtn().should('exist')
        homePage.startBtn().should('be.visible')
        homePage.startBtn().should('have.text', 'Empezá a aprender!')
    })

    it('should navigate to courses and check amount of course available is going to be 12 WITH POM', () => {
        homePage.getCursesNavigation().click()
        cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 12)
    })

    it('should first basics web elements WITH POM', () => {
        homePage.getTitle().should('include','Free Range Testers');
        cy.get('#comp-l02x1m8d4label').click()
        cy.xpath('//*[@id="comp-l02x1m8d3"]/a/div/div').click()
        cy.contains('Iniciar')
     })

    it('should find contactanos form field name with class has-custom-focus WITH POM', () => {
        homePage.getContactanosNavigation().should('have.class', 'has-custom-focus')
    })

    it('should find a link blog on the navigation bar WITH POM', () => {
        homePage.getBlogNavigation().should('have.text', 'Blog')
    })

    it('should first', () => {
        cy.wait(3000)
    })
})