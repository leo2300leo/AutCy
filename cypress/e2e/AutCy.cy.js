describe('template spec', () => {
  it('passes', () => {
    // we aren't logged in, so our web server
    // redirected us to /login
    cy.visit("http://172.19.181.178");
    cy.url().should("match", /login/);
  })
})