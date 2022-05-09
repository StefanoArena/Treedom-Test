/// <reference types="cypress" />

describe("Automation Tests", () => {
  it("should Click the button", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.xpath("//button[@class='btn class1 btn-primary btn-test']").click();
  });
  cy.on("window:confirm", (txt) => {
    expect(txt).to.contains("Primary button pressed");
  });
});
