import LoginPage from '../pageObjects/loginPage.js';
import testdata from '../fixtures/testdata.json'
/// <reference types="Cypress" />


describe("ClickUp",()=>{

    beforeEach(() => {
        // cy.visit('/', { timeout: 10000 });
        LoginPage.login();
      });

    it.only ("01_Verify the functionality of added cards in dashboard page",()=>{

        //Clicking on Dashboard
        loginPage.dashboardClick();
        
        
        //Verifying the Dashboard is expanded
        loginPage.dashboardverify();

        // Click on any created dashboard option where user added the data
        loginPage.addeditemsinDashboard();
        cy.pause();

        // Verify that dashboard details page should be opened
        cy.findByRole('switch',{name:'Edit mode:'}).should('exist');
        
      

        // Disable the toggle button of edit mode
        cy.findByRole('switch',{name:'Edit mode:'}).should('have.attr','Checked','false');
        // cy.findByRole('switch',{name:'Edit mode:'}).click();

        // Hover over on the tile
        cy.findByRole('button',{name:'Chat'}).trigger('mouseover');
        // cy.pause();


        // Verify that 3 dots menu action icon & settings icon option should not visible

        // click on the 'comment' feed box
        cy.findByPlaceholderText('Comment or type '/' for commands').click();

        // verify that box should be editable
        cy.findByPlaceholderText('Comment or type '/' for commands').should('have.attr','contenteditable','true');

        // Enter the comment in two different line
        cy.findByPlaceholderText('Comment or type '/' for commands').click().type('First line \n Second line').trigger('mouseover');
        cy.pause();

        // Verify the drag icon when user hover over on the added comment

        // Drag & drop the 2nd line comment to the first line


        // Verify that 2nd line should dragged into new line


        // Add emoji on any line and select the whole line
        cy.findByRole('button',{name:'Dropdown menu'}).click();


        // Verify the action bar with different options
        cy.findByRole('region',{name:'Frequently Used'}).should('exist');
        cy.findByRole('region',{name:'List of emoji'}).should('exist');
        cy.findByLabelText('smiley').click();


        // Click on the 'misc setting' icon from bar


        // Verify the drop down box should be opened


        // Click on 'clear format' option & verify the relevant format text should be displayed without emoji


        // Click on 'comment' button
        cy.findByRole('button',{name:'COMMENT'}).click();


        // Verify that comment should be added 


            
        });


        it ("02_Verify the functionality of added cards in dashboard page",()=>{
            // LoginPage.login();
    
            //Verifying the Dashboard is expanded
            cy.get('[data-test="sidebar-favorites__title-text-menu-expanded__true"]');

            // Click on any created dashboard option where user added the data
            cy.get('[data-test="nav-favorites-item__Testing 01"] > .cu-editable').click();

            // Verify that dashboard details page should be opened
            cy.findByRole('switch',{name:'Edit mode:'}).should('exist');
    
            // Verify that dashboard details page should be opened
            cy.findByRole('switch',{name:'Edit mode:'}).should('exist');
    
            // Click on the 'filter' option
            // Verify the filter modal with opened search options
            // Select filter option like 'assignee'
            // verify the applied filter with other opened fields
            // click on the drop down icon from 'select option' field
            // verify the filter modal with options
            // Mark the option as closed with indicate color
            // verify the status complete should be displayed in the box
            // Click on '+Add filter' & verify the filter modal options with different fields
            // select any field which was added in your project & choose any 'select option' with date wise
            // Verify that selected date should be visible on box
            // Click on the 'Apply' button & verify that modal should closed
            // Verify that filtered result should be displayed in the dashboard page as per applied filters with multiple condition.
                
            })
    

    });