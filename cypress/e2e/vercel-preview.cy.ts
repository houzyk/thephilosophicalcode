describe('Preview - E2E', () => {

  it('mock', () => {
    cy.visit(Cypress.env('vercel_preview_url'));
  });

})
