describe('template spec', () => {
  it('passes', () => {
    // we aren't logged in, so our web server
    // redirected us to /login
      cy.visit("http://172.19.181.178");
      cy.visit({
        url: "http://172.19.181.178/login",
        method: "GET",
      });
  })
})
