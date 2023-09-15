
/// <reference types="Cypress" />


describe("ClickUp",()=>{
    const username = "nbsahiltest@gmail.com";
    const password = "Sdogra@1234";

    beforeEach(() => {
    cy.visit('/');            
    
    //Clicking on Username
    cy.findByRole('textbox',{name:'Email'}).click().clear().type(username);
    

    //Clicking on password
    cy.findByLabelText('Password').click().clear().type(password);


    //Click on Submit
    cy.findByRole('button',{name:'Log In'}).click();
  });

    it ("Verify the functionality of added cards in dashboard page",()=>{

        cy.findByRole('link',{name:'Home'}).should('be.visible');
        cy.get('.cu-accordion__toggle.ng-tns-c734993244-17 > .cu-simple-bar__row-label').click();
            
        })

    });