describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("172.19.181.178", {headers: { "Accept-Encoding": "gzip, deflate" },});// change URL to match your dev URL
  
  });
});
