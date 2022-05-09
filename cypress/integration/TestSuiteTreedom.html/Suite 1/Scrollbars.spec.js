/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Scrollbars button", () => {
    cy.visit("http://uitestingplayground.com/scrollbars");
    cy.get(".btn-primary").scrollIntoView().should("be.visible").click();
  });
});
