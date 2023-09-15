const { defineConfig } = require('cypress')
module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: 'https://app.clickup.com',
        chromeWebSecurity: false,
        pageLoadTimeout: 20000,

}
});