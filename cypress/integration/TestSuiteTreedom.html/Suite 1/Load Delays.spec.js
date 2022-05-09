/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Click the button without event", () => {
    cy.visit("http://uitestingplayground.com/loaddelay");

    cy.get(".btn-primary")
      .should("be.visible", { timeout: 2000000 })
      .click({ force: true });
  });
});
