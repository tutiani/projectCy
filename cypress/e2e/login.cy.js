
describe('Register', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('autest'))
    });

    it('Login using data valid', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').type('tutian')
        cy.get('#loginFrm_password').type('Open12!')
        cy.get('button[title="Login"]').click()
    });
    it('Login With Incorrect Password', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').type('tutian')
        cy.get('#loginFrm_password').type('Open12')
        cy.get('button[title="Login"]').click()
        cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')
    });
    it('Login With Incorrect Name', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').type('ian')
        cy.get('#loginFrm_password').type('Open12!')
        cy.get('button[title="Login"]').click()
        cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')
    });
    it('Login With Empty Field', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('button[title="Login"]').click()
        cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')
    });
    it('Login With Empty Name', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('#loginFrm_password').type('Open12!')
        cy.get('button[title="Login"]').click()
        cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')
    });
    it.only('Login With Empty Password', () => {
        cy.get('#customernav').click()
        cy.get('.contentpanel').should('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').type('tutian')
        cy.get('button[title="Login"]').click()
        cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')
    });
})