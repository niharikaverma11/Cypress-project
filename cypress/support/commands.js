// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';
Cypress.Commands.add('login', (username, password) => {
   
    cy.visit('/');            
    
    //Clicking on Username
    cy.findByRole('textbox',{name:'Email'}).click().clear().type(username);
    

    //Clicking on password
    cy.findByLabelText('Password').click().clear().type(password);


    //Click on Submit
    cy.findByRole('button',{name:'Log In'}).click();
  });
  