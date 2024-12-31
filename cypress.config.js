const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com", // Définir l'URL de base
    chromeWebSecurity: false, // Désactiver les restrictions CORS

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
