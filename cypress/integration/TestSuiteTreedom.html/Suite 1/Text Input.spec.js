/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Click the button without event", () => {
    cy.visit("http://uitestingplayground.com/textinput");
    cy.get(".form-control").trigger("type").type("NEW TITLE FOR THE BUTTON");
    cy.get(".btn-primary").should("be.visible").click();
  });
});
