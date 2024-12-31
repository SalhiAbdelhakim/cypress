///<reference types ="cypress"/>

const { faker } = require("@faker-js/faker");

const name = faker.person.fullName();
const email = faker.internet.email();
const adresse = faker.location.streetAddress();
const tele = faker.phone.number({ style: "international" });

describe("ma premiere suite de test", () => {
  it("ma premiere scenario", () => {
    cy.log("je suis ici");

    cy.visit("https://www.saucedemo.com");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".header_secondary_container").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type(name);
    cy.get("#last-name").type(name);
    cy.get("#postal-code").type(name);
    cy.get("#continue").click();
    cy.get("#finish").click();
    cy.get("#back-to-products").click();
  });
});
