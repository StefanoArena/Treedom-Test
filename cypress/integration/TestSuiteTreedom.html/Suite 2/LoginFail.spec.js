/// <reference types="cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://automationexercise.com/");
    cy.wait(2000);
    cy.get("#slider").should("be.visible");
    cy.get(".fa-lock").should("be.visible").click();
    cy.get(".login-form")
      .contains("Login to your account")
      .should("be.visible");
    cy.get("input[data-qa='login-email']").type("test12@email.com");
    cy.get("input[data-qa='login-password']").type("User123");
    cy.get("button").contains("Login").click({ force: true });
    cy.get("p")
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });
});
