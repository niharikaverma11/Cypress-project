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
        LoginPage.dashboardClick();
        
        //Verifying the Dashboard is expanded
        LoginPage.dashboardverify();

        // Click on any created dashboard option where user added the data
        LoginPage.addeditemsinDashboard();     
        
        // Verify that dashboard details page should be opened
        LoginPage.verifyeditmode()
        
      

        // Disable the toggle button of edit mode
        LoginPage.disablededitmode()

        // Hover over on the tile
        // LoginPage.
        // cy.pause();


        // Verify that 3 dots menu action icon & settings icon option should not visible
        // LoginPage.


        // click on the 'comment' feed box
        LoginPage.clickcommentfeedbox()

        // verify that box should be editable
        LoginPage.commentintwolines()

        // Enter the comment in two different line
        // LoginPage.

        // Verify the drag icon when user hover over on the added comment
        // LoginPage.

        // Drag & drop the 2nd line comment to the first line
        // LoginPage.


        // Verify that 2nd line should dragged into new line
        // LoginPage.


        // Add emoji on any line and select the whole line
        // LoginPage.


        // Verify the action bar with different options
        // LoginPage.


        // Click on the 'misc setting' icon from bar
        // LoginPage.


        // Verify the drop down box should be opened
        // LoginPage.


        // Click on 'clear format' option & verify the relevant format text should be displayed without emoji
        // LoginPage.


        // Click on 'comment' button
        // LoginPage.


        // Verify that comment should be added 
        // LoginPage.


            

            
        });

    });