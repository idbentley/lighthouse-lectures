describe('Game Tests', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  })
  it('Test that I can make a choice', () => {

      cy.get('.player button').first().click();
      cy.get('[data-testid="result_footer"]').as('result_footer');
      cy.get("@result_footer")
        .should("not.contain", "Waiting for your choice");
      cy.get('.computer button:contains(?)').should('have.length', 2);
  });
  it('Can fetch high schores', () => {
    cy.intercept('GET', '**/andydlindsay/moai-axe-tree/high-scores', {fixture: 'high-scores'})
      .as('highScoreLoad')
    cy.get('[data-testid="high-scores"]')
      .click();
    cy.wait('@highScoreLoad');
    cy.get('[data-testid="result_footer"]').contains('Ian Bentley');
    
  })
});