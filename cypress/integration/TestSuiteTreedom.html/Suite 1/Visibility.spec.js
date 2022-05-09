/// <reference types="cypress" />

describe("Automation Tests", () => {
  it('Click the button "Hide"', () => {
    cy.visit("http://uitestingplayground.com/visibility");
    cy.get("#removedButton").should("be.visible");
    cy.get("#zeroWidthButton").should("be.visible");
    cy.get("#overlappedButton").should("be.visible");
    cy.get("#transparentButton").should("be.visible");
    cy.get("#invisibleButton").should("be.visible");
    cy.get("#notdisplayedButton").should("be.visible");
    cy.get("#offscreenButton").should("be.visible");
    cy.get("#hideButton")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#hideButton").should("be.visible");
        cy.get("#removedButton").should("not.exist");
        cy.get("#zeroWidthButton").should("not.be.visible");
        cy.get("#overlappedButton").should(
          "have.css",
          "background-color",
          "rgb(40, 167, 69)"
        );
        cy.get("#transparentButton")
          .should("not.be.visible")
          .and("have.css", "opacity", "0");
        cy.get("#invisibleButton").should("not.be.visible");
        cy.get("#notdisplayedButton").should("not.be.visible");
        cy.get("#offscreenButton").should(
          "have.class",
          "btn btn-info offscreen"
        );
      });
  });
});
