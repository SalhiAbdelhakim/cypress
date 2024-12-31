///<reference types ="cypress"/>

const { faker } = require("@faker-js/faker");

const name = faker.person.fullName();
const email = faker.internet.email();
const adresse = faker.location.streetAddress();
const tele = faker.phone.number({ style: "international" });

describe("ma premiere suite de test", () => {
  it("ma premiere scenario", () => {
    cy.log("je suis ici");

    // cy.visit("https://demoqa.com/text-box").then(() => {
    //   cy.log("Page chargée avec succès");
    // });

    // cy.visit("https://demoqa.com/text-box");
    // // cy.wait(9000);
    // cy.get("#userName").type(name);
    // cy.get("#userEmail").type(email);
    // cy.get("#currentAddress").type(adresse);
    // cy.get("#permanentAddress").type(tele);

    // cy.get("#submit").click();
    // // cy.contains("Submit").click();

    // cy.get("[id=name]").should("be.visible").and("contain.text", "wa nari kkk");
    // -----------------------------------------------------

    // cy.visit("https://www.ironspider.ca/forms/checkradio.htm");
    // cy.get("[value=blue]")
    //   .check()
    //   .should("be.checked")
    //   .uncheck()
    //   .should("not.be.checked");

    // cy.get("[name=browser]").check().should("be.checked");
    //-------------------------------------------
    // cy.visit("https://www2.ulb.ac.be/demo/format-ulb/index-72.html");
    // cy.get("#input0").select("Anglais").should("have.value", "en");
  });

  // KATA 01 :
  it.only("ma premiere scenario", () => {
    cy.log("je suis ici");

    cy.visit("https://demoqa.com/text-box").then(() => {
      cy.log("Page chargée avec succès");
    });

    // cy.wait(9000);
    cy.get("#userName").should("be.visible").and("not.be.disabled");
    cy.get("#userEmail").should("be.visible").and("not.be.disabled");
    cy.get("#currentAddress").should("be.visible").and("not.be.disabled");
    cy.get("#permanentAddress").should("be.visible").and("not.be.disabled");

    cy.get("#submit").click().should("not.be.disabled"); //Vérifie que le bouton n'est pas désactivé.

    //
  });

  it("ma 2 scenario", () => {
    cy.log("je suis ici");

    // Accéder à la page du formulaire
    cy.visit("https://www.netflix.com/login");

    cy.get("[name=userLoginId]").type(email);

    // Cliquer sur le bouton 'Envoyer' sans remplir les champs obligatoires
    cy.contains("S'identifier").click();

    // Vérifier l'apparition des messages d'information pour les champs obligatoires
    cy.get("#:r4:")
      .should("be.visible")
      .and(
        "contain",
        "Votre mot de passe doit comporter entre 4 et 60 caractères."
      );
  });
});
