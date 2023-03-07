class FreeRangeHome {

    navigateToHome() {
        cy.visit('www.freerangetesters.com');
    }

    startBtn() {
        return cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2')
    }

    getTitle() {
        return cy.title();
    }

    getBlogNavigation() {
        return cy.get('#comp-l02x1m8d1label')
    }

    getContactanosNavigation() {
        return cy.get('#input_comp-l1ed927d')
    }

    getCursesNavigation() {
        return cy.get('#comp-l02x1m8d2label')
    }
}

export default FreeRangeHome