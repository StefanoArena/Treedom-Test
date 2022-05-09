/// <reference types="cypress" />

describe("Dynamic ID Button", () => {
  it("should be able to Click the button despite dynamic id", () => {
    cy.visit("http://uitestingplayground.com/dynamicid");
    cy.contains("Button with Dynamic ID").click();
  });
});

describe("LoadDelay", () => {
  it("should Click the button tht appears after a delay", () => {
    cy.visit("http://uitestingplayground.com/loaddelay");

    cy.get(".btn-primary")
      .should("contain", "Button Appearing After Delay", { timeout: 5000 })
      .should("be.visible")
      .click();
  });
});
