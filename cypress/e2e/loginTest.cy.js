describe('login', () => {
    beforeEach('got to page', ()=>{
        cy.visit("https://www.edu.goit.global/account/login");
    })

    it('succesfully login to GOIT page', () => {
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('[name="password"]').type('1234567890');
        cy.get('button[type="submit"]').click();
        cy.url().should('include','homepage');
        cy.wait(500);
        cy.get('button[data-element-type="burger-menu"]').click()
        cy.wait(500);
        cy.get('.next-bve2vl').contains("Log out").click()
    })

    it('succesfully login to GOIT page2', () => {
        cy.get('#user_email').type("testowyqa@qa.team");
        cy.get('[name="password"]').type('QA!automation-1');
        cy.get('button[type="submit"]').click();
        cy.url().should('include','homepage');
        cy.wait(500);
        cy.get('button[data-element-type="burger-menu"]').click()
        cy.wait(500);
        cy.get('.next-bve2vl').contains("Log out").click()
    })
  })