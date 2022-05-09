/// <reference types="cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://automationexercise.com/");
    cy.wait(2000);
    cy.get("#slider").should("be.visible");
    cy.get(".fa-lock").should("be.visible").click();
    cy.get(".signup-form").should("be.visible");
    cy.get("input[name='name']").type("User1").should("have.value", "User1");
    cy.get("input[data-qa='signup-email']")
      .type("test@email.com")
      .should("have.value", "test@email.com");
    cy.get("button").contains("Signup").click({ force: true });
    cy.wait(1000);
    cy.get(".text-center")
      .contains("Enter Account Information")
      .should("be.visible");

    cy.get("#name").should("have.value", "User1");
    cy.get("#email").should("have.value", "test@email.com");
    cy.get("#password").type("User123").should("have.value", "User123");
    cy.get("#days").select("1");
    cy.get("#months").select("1");
    cy.get("#years").select("1980");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("Username").should("have.value", "Username");
    cy.get("#last_name")
      .type("Usersurname")
      .should("have.value", "Usersurname");
    cy.get("#company").type("Usercompany").should("have.value", "Usercompany");
    cy.get("#address1")
      .type("Viale Roma, 1")
      .should("have.value", "Viale Roma, 1");
    cy.get("#address2")
      .type("Viale Roma, 2")
      .should("have.value", "Viale Roma, 2");
    cy.get("#state").type("Italy").should("have.value", "Italy");
    cy.get("#city").type("Roma").should("have.value", "Roma");
    cy.get("#zipcode").type("1111").should("have.value", "1111");
    cy.get("#mobile_number").type("3333333").should("have.value", "3333333");
    cy.get("button").contains("Create Account").click({ force: true });
    cy.get(".text-center").should("have.text", "Account Created!");
    //Manca delete
  });
});
