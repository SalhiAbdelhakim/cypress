///<reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe("Tests Demoblaze - E-commerce", () => {
  const user = {
    username: faker.person.userName(),
    password: faker.number.password(),
    email: faker.internet.email(),
    card: faker.finance.creditCardNumber(),
  };

  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/");
  });

  it("Création de compte", () => {
    cy.get("#signin2").should("be.visible").click();
    cy.get("#sign-username").should("be.visible").type(user.username);
    cy.get("#sign-password").should("be.visible").type(user.password);
    cy.get("button[onclick='register()']").should("be.visible").click();

    // Vérification qu'une alerte apparaît après inscription
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include("Sign up successful");
    });
  });

  it("Authentification", () => {
    cy.get("#login2").should("be.visible").click();
    cy.get("#loginusername").should("be.visible").type(user.username);
    cy.get("#loginpassword").should("be.visible").type(user.password);
    cy.get("button[onclick='logIn()']").should("be.visible").click();

    // Vérification que l'utilisateur est connecté
    cy.get("#nameofuser")
      .should("be.visible")
      .should("include.text", `Welcome ${user.username}`);
  });

  it("Ajouter un produit au panier", () => {
    cy.get(".card-title").contains("Samsung galaxy s6").click();
    cy.get(".btn-success").contains("Add to cart").click();

    // Vérification qu'une alerte apparaît après ajout au panier
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include("Product added");
    });

    // Retour à la page d'accueil
    cy.get(".nav-link").contains("Home").click();
  });

  it("Confirmer la commande et valider le paiement", () => {
    cy.get("#cartur").click();
    cy.get("button[data-target='#orderModal']").click();

    // Compléter le formulaire de commande
    cy.get("#name").type(faker.person.fullName());
    cy.get("#country").type(faker.location.country());
    cy.get("#city").type(faker.location.city());
    cy.get("#card").type(user.card);
    cy.get("#month").type("12");
    cy.get("#year").type("2025");
    cy.get("button[onclick='purchaseOrder()']").click();

    // Vérification du message de succès
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert").should(
      "include.text",
      "Thank you for your purchase!"
    );
  });
});
