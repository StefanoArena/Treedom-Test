/// <reference types="cypress" />

describe("Demo", () => {
  it("Click and Register", () => {
    cy.visit("http://uitestingplayground.com/mouseover");
    cy.contains("Click me").dblclick();
    cy.get("#clickCount")
      .should("be.visible")
      .and("contain", "2")
      .then((listing) => {
        const listingCount = Cypress.$(listing).length;
        expect(listing).to.have.length(listingCount);
      });
  });
});
