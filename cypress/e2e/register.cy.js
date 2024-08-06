describe('Register', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('autest'))
    });

    it('Register Valid Data', () => {
        cy.get('#customernav').click()
        cy.get('button[type="submit"]').eq(0).click()
        cy.get('#AccountFrm_firstname').type('Tutiani')
        cy.get('#AccountFrm_lastname').type('Testing')
        cy.get('#AccountFrm_email').type('test1@gmail.com')
        cy.get('#AccountFrm_telephone').type('085710503103')
        cy.get('#AccountFrm_fax').type('021111111')
        cy.get('#AccountFrm_company').type('QA Test')
        cy.get('#AccountFrm_address_1').type('Jl.Ratu Boko IV. No 1001')
        cy.get('#AccountFrm_city').type('Bekasi')
        cy.wait(100)
        cy.get('#AccountFrm_postcode').type('1100')
        cy.get('#AccountFrm_country_id').select('Indonesia')
        cy.get('#AccountFrm_zone_id').select('Jawa Barat')
        cy.get('#AccountFrm_loginname').type('tutian')
        cy.get('#AccountFrm_password').type('Open12!', { log: false })
        cy.get('#AccountFrm_confirm').type('Open12!', {log : false})
        //Newletter confirmation
        cy.get('#AccountFrm_newsletter0').check()
        cy.get('#AccountFrm_agree').check()
        cy.get('button[type="submit"]').eq(0).click()
        cy.wait(100)
        cy.get(".heading1").should('have.text', ' Your Account Has Been Created!')
        
    });

    it.only('Register With Email Exist', () => {
        cy.get('#customernav').click()
        cy.get('button[type="submit"]').eq(0).click()
        cy.get('#AccountFrm_firstname').type('Tutiani')
        cy.get('#AccountFrm_lastname').type('Testing')
        cy.get('#AccountFrm_email').type('test1@gmail.com')
        cy.get('#AccountFrm_telephone').type('085710503103')
        cy.get('#AccountFrm_fax').type('021111111')
        cy.get('#AccountFrm_company').type('QA Test')
        cy.get('#AccountFrm_address_1').type('Jl.Ratu Boko IV. No 1001')
        cy.get('#AccountFrm_city').type('Bekasi')
        cy.wait(100)
        cy.get('#AccountFrm_postcode').type('1100')
        cy.get('#AccountFrm_country_id').select('Indonesia')
        cy.get('#AccountFrm_zone_id').select('Jawa Barat')
        cy.get('#AccountFrm_loginname').type('tutian')
        cy.get('#AccountFrm_password').type('Open12!', { log: false })
        cy.get('#AccountFrm_confirm').type('Open12!', {log : false})
        //Newletter confirmation
        cy.get('#AccountFrm_newsletter0').check()
        cy.get('#AccountFrm_agree').check()
        cy.get('button[type="submit"]').eq(0).click()
        cy.wait(100)
        cy.get('.alert').should('contain', 'Error: E-Mail Address is already registered!')
    });
    
});