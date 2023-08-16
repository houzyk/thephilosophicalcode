describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('vercel_preview_url'))
  })
})
