

describe('Test du site', () => {
    it('Visits the local test.html file', () => {
        cy.visit('./lightbox.html');
        cy.wait(1000);
        cy.get('[data-cy=testlight]').click();
        cy.wait(1500);
        cy.get('body').click(0,0)
        
     
    });
        
  });