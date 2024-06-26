describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("172.19.181.178/index.html", {headers: { "Accept-Encoding": "gzip, deflate, login" },});// change URL to match your dev URL
  
  });
});
