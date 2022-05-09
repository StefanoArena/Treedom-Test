/// <reference types="cypress" />

describe("Demo", () => {
  it("Login", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");
    cy.get("input[name='UserName']")
      .type("User1")
      .should("have.value", "User1");
    cy.get("input[name='Password']").type("pwd").should("have.value", "pwd");
    cy.get("#login").click();
  });
});
