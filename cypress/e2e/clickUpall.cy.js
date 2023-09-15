import LoginPage from '../pageObjects/loginPage.js';
import Filter01 from '../pageObjects/filter01.js';
import Threedot from '../pageObjects/threedot.js';
import testdata from '../fixtures/testdata.json'
/// <reference types="Cypress" />


describe("ClickUp",()=>{
    LoginPage.login();

    beforeEach(() => {

        // LoginPage.login();
      });



        it("01_Verify the functionality of added cards in dashboard page",()=>{

            //Clicking on Dashboard
            Filter01.clickDashboard();

    
            //Verifying the Dashboard is expanded
            Filter01.verifyDashboard();

            // Click on any created dashboard option where user added the data
            Filter01.clickexistedDashboard();

            // Verify that dashboard details page should be opened
            Filter01.verifydetailDashboard();
    
            // Clicking on Edit mode
            Filter01.clickEditmode();
    
            // Click on the 'filter' option
            Filter01.clickFilter();


            // Verify the filter modal with opened search options
            Filter01.verifyfiltermodal();

            // Select filter option like 'assignee'
            Filter01.selectassignee();

            // verify the applied filter with other opened fields
            Filter01.verifyapplyfilterandotheroptions();

            // click on the drop down icon from 'select option' field
            Filter01.selectoptionfromdropdown();

            // verify the filter modal with options
            Filter01.verifyfiltermodaloption();

            // Mark the option as closed with indicate color
            Filter01.markcloseindicator();

            // verify the status complete should be displayed in the box
            Filter01.verifycompletestatus();

            // Click on '+Add filter' & verify the filter modal options with different fields
            Filter01.clickplusAddfilter();

            // select any field which was added in your project & choose any 'select option' with date wise
            Filter01.selectanyfield();

            // Verify that selected date should be visible on box
            Filter01.verifyselecteddate();

            // Click on the 'Apply' button & verify that modal should closed
            Filter01.clickonApply();

            //Clearing the settings
            Filter01.clearingsetting();
            
                
            });


    
        it('02_Verify the functionality of added cards in dashboard page',()=>{
    
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
            Threedot.clickoutside();
    
            // verify the title updated on top & left sidebar
            Threedot.verifyrenamedDashboard();
    
            // again Click on the 3 dots action button from the right side options
            Threedot.clickonthreedot();
                
            // click on the 'duplicate' option
            Threedot.clickDuplicate();
    
            // verify that duplicated page should be created
            // cy.findByRole('link',{name: "New Dashboard (1)"}).should('have.length', 1);
            // cy.contains('New Dashboard (1)');
    
            // again Click on the 3 dots action button from the right side options
            Threedot.clickonthreedot();
    
            // click on the 'delete' option
            Threedot.clickDelete();
    
            // verify that duplicated page should be deleted and display the previous page
            Threedot.duplicatenotexist();

            //Set to default
            Threedot.clickonthreedot();
            Threedot.clickonrename();
            Threedot.settodefaulttext();
            Threedot.clickoutside();
    
    
    
            });
    


    });