import LoginPage from '../pageObjects/loginPage.js';
import Filter01 from '../pageObjects/filter01.js';
import Threedot from '../pageObjects/threedot.js';
import testdata from '../fixtures/testdata.json'
/// <reference types="Cypress" />


describe("ClickUp",()=>{

    beforeEach(() => {

        //Visit and Login;
        LoginPage.login();
      });



          after(() => {

            //Set to default
            Threedot.clickonthreedot();
            Threedot.clickonrename();
            Threedot.settodefaulttext();

          });

            it('03_Test Case 03',()=>{

            //Clicking on Dashboard
            Filter01.clickDashboard();
    
            //Verifying the Dashboard is expanded
            Filter01.verifyDashboard();

            // Click on any created dashboard option where user added the data
            Filter01.clickexistedDashboard();

            // Verify that dashboard details page should be opened
            Filter01.verifydetailDashboard();;

            // Click on the 3 dots action button from the right side options
            Threedot.clickonthreedot();

            // Verify the drop down options should be displayed
            Threedot.verifydropdownoptions();
            

            // click on the 'rename' option
            Threedot.clickonrename();


            // Click outside the box and verify the old existing name should be displayed
            Threedot.clickoutside();
            
            // Again click on the 'rename' option
            Threedot.clickonthreedot();
            Threedot.clickonrename();


            // remove the text started with dashboard and add new title
            Threedot.removetext();

            // verify the title updated on top & left sidebar
            Threedot.verifyrenamedDashboard();

            // again Click on the 3 dots action button from the right side options
            Threedot.clickonthreedot();
            
            // click on the 'duplicate' option
            Threedot.clickDuplicate();

            // Click outside the box and verify that duplicated name should auto fill
            // verify that duplicated page should be created
            // cy.findByRole('link',{name: "New Dashboard (1)"}).should('have.length', 1);
            // cy.contains('New Dashboard (1)');

            // again Click on the 3 dots action button from the right side options
            Threedot.clickonthreedot();

            // click on the 'delete' option
            Threedot.clickDelete();

            // verify that duplicated page should be deleted and display the previous page
            Threedot.duplicatenotexist();



            });

    });