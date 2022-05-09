/// <reference types="cypress" />

describe("Go to the manager page and add another user", () => {
  it("user added and is still in the user list", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.wait(1000);
    cy.get(".btn-lg")
      .contains("Bank Manager Login")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//button[normalize-space()='Add Customer']")
      .should("be.visible")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//input[@placeholder='First Name']")
      .should("be.empty")
      .type("Draco")
      .then(() => {
        cy.xpath("//input[@placeholder='First Name']")
          .should("be.visible")
          .and("contain.value", "Draco");
      });
    cy.xpath("//input[@placeholder='Last Name']")
      .should("be.empty")
      .type("Malfoy")
      .then(() => {
        cy.xpath("//input[@placeholder='Last Name']")
          .should("be.visible")
          .and("contain.value", "Malfoy");
      });
    cy.xpath("//input[@placeholder='Post Code']")
      .should("be.empty")
      .type("DiagonAlley2")
      .then(() => {
        cy.xpath("//input[@placeholder='Post Code']")
          .should("be.visible")
          .and("contain.value", "DiagonAlley2");
      });
    cy.xpath("//button[@type='submit']")
      .should("have.text", "Add Customer")
      .click({ force: true }, { timeout: 2000000 })
      .then(() => {
        cy.wait(1000);
        cy.on("window:confirm", () => true);
        cy.log('The alert is having the "ok" button');
      });
    cy.xpath("//button[normalize-space()='Customers']")
      .should("be.visible")
      .click({ force: true }, { timeout: 2000000 });

    cy.xpath("//td[normalize-space()='Draco']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath("//td[normalize-space()='Malfoy']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath("//td[normalize-space()='DiagonAlley2']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath("  //button[normalize-space()='Home']").click(
      { force: true },
      { timeout: 2000000 }
    );
  });

  it("Go to the manager page and delete an existing user", () => {
    cy.wait(1000);
    cy.get(".btn-lg")
      .contains("Bank Manager Login")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//button[normalize-space()='Customers']")
      .should("be.visible")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//td[normalize-space()='Draco']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath("//td[normalize-space()='Malfoy']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath("//td[normalize-space()='DiagonAlley2']")
      .scrollIntoView()
      .should("be.visible");
    cy.xpath(
      "(//button[@ng-click='deleteCust(cust)'][normalize-space()='Delete'])[6]"
    )
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//td[normalize-space()='Draco']").should("not.exist");
    cy.xpath("//td[normalize-space()='Malfoy']").should("not.exist");
    cy.xpath("//td[normalize-space()='DiagonAlley2']").should("not.exist");
    cy.xpath("  //button[normalize-space()='Home']").click(
      { force: true },
      { timeout: 2000000 }
    );
  });
  it("Open Account", () => {
    cy.wait(1000);
    cy.get(".btn-lg")
      .contains("Bank Manager Login")
      .click({ force: true }, { timeout: 2000000 });
  cy.xpath("//button[normalize-space()='Open Account']").click({ force: true }, { timeout: 2000000 })
    cy.get("#userSelect").select("Ron Weasly").should("have.value", "3");
    cy.get("#currency").select("Pound").should("have.value","Pound")
    cy.xpath("//button[normalize-space()='Process']").click({ force: true }, { timeout: 2000000 }).then(() => {
      cy.wait(1000);
      cy.on("window:confirm", () => true);
      cy.log('The alert is having the "ok" button');
      cy.xpath("  //button[normalize-space()='Home']").click(
        { force: true },
        { timeout: 2000000 }
      );
    });

  });
});
