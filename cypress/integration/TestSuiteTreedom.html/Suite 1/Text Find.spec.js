/// <reference types="cypress" />

describe("Find the text with normalize-space", () => {
  it("Text Find", () => {
    cy.visit("http://uitestingplayground.com/verifytext");
    cy.xpath(
      "//div[@class='bg-primary']//span[normalize-space(.)='Welcome UserName!']"
    ).click();
  });
});
