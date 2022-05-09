/// <reference types="cypress" />

describe("Deposit one transaction with logged user, check list of transaction and logout ", () => {
  it("successfully user login and post transaction", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.wait(1000);
    cy.get(".btn-lg").contains("Customer Login").click({ force: true });
    cy.get("#userSelect")
      .select("Ron Weasly")
      .should("have.value", "3")
      .and("be.visible");
    cy.get(".btn-default").should("contain.text", "Login").click();
    cy.get(".ng-binding").contains("Ron Weasly").and("be.visible");

    cy.xpath("//button[normalize-space()='Deposit']").click();
    cy.xpath("//input[@placeholder='amount']").click();
    cy.xpath("//input[@placeholder='amount']").type("5000");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//span[@class='error ng-binding']").should(
      "have.text",
      "Deposit Successful"
    );
    cy.xpath("//strong[normalize-space()='5000']")
      .should("be.visible")
      .contains("5000");
    cy.wait(3000);
    cy.xpath("//button[normalize-space()='Transactions']").click();
    cy.xpath("//td[normalize-space()='5000']")
      .should("be.visible")
      .and("not.be.empty");
    cy.xpath("(//td[normalize-space()='Credit'])[1]")
      .should("be.visible")
      .and("not.be.empty");
    cy.xpath("//button[normalize-space()='Back']").click();
    cy.xpath("//button[normalize-space()='Logout']").click();
  });
});
  describe("Check list of transaction, reset all transaction and verify balance eq 0 ", () => {
    it("empty the transaction list", () => {
      cy.visit(
        "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
      );
      cy.wait(1000);
      cy.get(".btn-lg").contains("Customer Login").click({ force: true });
      cy.get("#userSelect")
        .select("Hermoine Granger")
        .should("have.value", "1")
        .and("be.visible");
      cy.get(".btn-default").should("contain.text", "Login").click();
      cy.get(".ng-binding").contains("Hermoine Granger").and("be.visible");
      cy.xpath("//button[normalize-space()='Transactions']").click();
      cy.xpath(
        "//tr[@id='anchor2']//td[@class='ng-binding'][normalize-space()='Credit']"
      ).should("be.visible");
      cy.xpath("//button[normalize-space()='Reset']").click({ force: true });
      cy.xpath(
        "//tr[@id='anchor2']//td[@class='ng-binding'][normalize-space()='Credit']"
      ).should("not.exist");
      cy.xpath("//button[normalize-space()='Back']").click();
      cy.xpath("//strong[normalize-space()='0']")
        .should("be.visible")
        .and("contain", "0");
      cy.xpath("//button[normalize-space()='Logout']").click();
    });
  });


describe("registration of the withdrawal transaction and verification of the user's balance", () => {
  it("The transaction is posted and the balance is changed", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.wait(1000);
    cy.get(".btn-lg").contains("Customer Login").click({ force: true });
    cy.get("#userSelect")
      .select("Albus Dumbledore")
      .should("have.value", "4")
      .and("be.visible");
    cy.get(".btn-default").should("contain.text", "Login").click();
    cy.get(".ng-binding").contains("Albus Dumbledore").and("be.visible");
    cy.xpath("//button[normalize-space()='Deposit']").click();
    cy.xpath("//input[@placeholder='amount']").click();
    cy.xpath("//input[@placeholder='amount']").type("50");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//span[@class='error ng-binding']").should(
      "have.text",
      "Deposit Successful"
    );
    cy.xpath("//strong[normalize-space()='50']")
      .should("be.visible")
      .contains("50");
    cy.wait(1000);
    cy.xpath("//button[normalize-space()='Withdrawl']").click();
    cy.xpath("//input[@placeholder='amount']").click();
    cy.wait(1000);
    cy.xpath("//input[@placeholder='amount']").type("25");

    cy.get(".btn-default")
      .contains("Withdraw")
      .should("be.visible")
      .click({ force: true }, { timeout: 2000000 });
    cy.xpath("//span[@class='error ng-binding']").should(
      "have.text",
      "Transaction successful"
    );
    cy.xpath("//strong[normalize-space()='25']")
      .should("be.visible",{ timeout: 2000000 })
      .contains("25");
      cy.xpath("//button[normalize-space()='Logout']").click();
  });
});
