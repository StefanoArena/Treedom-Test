/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("should Click the button", () => {
    cy.visit("http://uitestingplayground.com/nbsp");
    cy.xpath("//button[normalize-space()='My Button']").click();
  });
});
