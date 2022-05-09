/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("Click the button", () => {
    cy.visit("http://uitestingplayground.com/ajax");
    cy.intercept("GET", "/ajaxdata").as("getajaxdata");
    cy.get(".btn-primary")
      .should("have.text", "Button Triggering AJAX Request")
      .click();

    cy.wait("@getajaxdata").its("response.statusCode").should("eq", 200);
    cy.get(".bg-success")
      .should("have.text", "Data loaded with AJAX get request.")
      .click();
  });
});
