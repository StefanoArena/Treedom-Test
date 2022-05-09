/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Click the button, wait and click the label", () => {
    cy.visit("http://uitestingplayground.com/clientdelay");
    cy.intercept("GET", "/bg-success").as("getBg-success");
    cy.get(".btn-primary")
      .should("have.text", "Button Triggering Client Side Logic")
      .click();
    cy.get(".bg-success", { timeout: 30000 })
      .should("have.text", "Data calculated on the client side.")
      .click();
  });
});
