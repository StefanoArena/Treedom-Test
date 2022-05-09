/// <reference types="cypress" />

// seventh Test - Click
describe("Progress Bar", () => {
  it("Wait bar for stop", () => {
    cy.visit("http://uitestingplayground.com/progressbar");
    cy.get("#startButton").click();

    cy.get("#progressBar")
      .contains("75%", { timeout: 2000000 })
      .then(() => {
        cy.get("#stopButton").click();
      });
  });
});
