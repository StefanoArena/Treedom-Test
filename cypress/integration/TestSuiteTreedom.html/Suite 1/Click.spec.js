/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Click the button without event", () => {
    cy.visit("http://uitestingplayground.com/click");
    cy.get(".btn-primary")
      .should("be.visible")
      .trigger("mouseover")
      .click({ force: true });
  });
});
