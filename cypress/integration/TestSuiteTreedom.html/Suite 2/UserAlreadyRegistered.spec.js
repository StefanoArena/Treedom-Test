/// <reference types="cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://automationexercise.com/");
    cy.wait(2000);
    cy.get("#slider").should("be.visible");
    cy.get(".fa-lock").should("be.visible").click();
    cy.get(".signup-form").should("be.visible");
    cy.get("input[name='name']").type("User1").should("have.value", "User1");
    cy.get("input[data-qa='signup-email']")
      .type("test@email.com")
      .should("have.value", "test@email.com");
    cy.get("button").contains("Signup").click({ force: true });
    cy.get("p").contains("Email Address already exist!").should("be.visible");
  });
});
