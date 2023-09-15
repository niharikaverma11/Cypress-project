import LoginPage from '../pageObjects/loginPage.js';
import testdata from '../fixtures/testdata.json'
/// <reference types="Cypress" />


describe("ClickUp",()=>{

    beforeEach(() => {
        // cy.visit('/', { timeout: 10000 });
        LoginPage.login();

      });

            it('04_Test Case 04',()=>{

            //Clicking on Dashboard
            cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').first().click();
    
            //Verifying the Dashboard is expanded
            cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');

            // Click on any created dashboard option where user added the data
            cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
            cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();

            // Verify that dashboard details page should be opened
            cy.findByRole('switch',{name:'Edit mode:'},{timeout:10000}).should('exist');

            // Click on the 'filter' option
            cy.findByRole('switch',{name:'Edit mode:'}).click();

            cy.get('[data-test="cu-grid-layout-item__settings-ellipsis"] > [data-test="grid-layout-item__settings-btn"]').last().trigger('mouseover');
            cy.pause();

            // cy.findByRole('button',{name:'Tasks by Assignee'}).realHover();
            // cy.get('.gridster__item-3>.cu-grid-layout-item__toolbar-row-line > .cu-grid-layout-item-breadcrumbs__item').trigger('mouseover');
            cy.get('[data-test="filter-value-list-dropdown__toggle"] > .cu-filter-value-list-dropdown__toggle cu-dropdown__toggle').click();

            // Verify the filter modal with opened search options
            cy.get('.cu-filter-value-list-dropdown__title').should('exist');
            cy.get('[data-test="search-input__input"]').should('exist');

            // Select any filter option status'
            cy.get('[data-test="filter-value-add-dropdown__item-Status"]').click();
            
            // verify the applied filter with other opened fields
            // click on the drop down icon from 'select option' field
            // verify the filter modal with options
            // Mark the option as closed with indication color
            // verify the status complete should be displayed in the box
            // Click on the 'confirm' button & verify the modal should closed
            // Click on the 'Apply' button & verify that modal should closed
            // verify that filtered result should be displayed in the dashboard page (as per created dashboard) 
            })
    

    });