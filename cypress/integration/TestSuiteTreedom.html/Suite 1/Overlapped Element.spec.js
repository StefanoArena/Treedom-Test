/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Overlapped Element", () => {
    cy.visit("http://uitestingplayground.com/overlapped");
    cy.get("#id")
      .should("be.empty")
      .type("123")
      .then(() => {
        cy.get("#id").should("be.visible").and("have.value", "123");
      });
    cy.get("#name")
      .scrollIntoView()
      .should("be.empty")
      .type("User")
      .then(() => {
        cy.get("#name").should("be.visible").and("have.value", "User");
      });
  });
});
