///<reference types="cypress"/>

describe("hooks_jeux/donnes", () => {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("users_sauce").as("users");
  });

  it("login_01", function () {
    const user = this.users[0];
    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.Password);
    cy.get("#login-button").should("be.visible").and("not.be.disabled").click();
  });

  it("login_02", function () {
    const user = this.users[1];
    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.Password);
    cy.get("#login-button").should("be.visible").and("not.be.disabled").click();
  });

  it("login_03", function () {
    const user = this.users[2];
    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.Password);
    cy.get("#login-button").should("be.visible").and("not.be.disabled").click();
  });
});

//   before(() => {
//     cy.log("sbefor all");
//   });

//   beforeEach(() => {
//     cy.log("sbefor each");
//   });
//   it("first senario", () => {
//     cy.log("salut les aamis 1");
//   });
//   it("dexieme senario", () => {
//     cy.log("salut les aamis 2");
//   });
//   it("3 senario", () => {
//     cy.log("salut les aamis 3");
//   });
//   after(() => {
//     cy.log("after all");
//   });
//   afterEach(() => {
//     cy.log("after each");
//   });
