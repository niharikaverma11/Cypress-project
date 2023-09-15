import LoginPage from '../pageObjects/loginPage.js';
import testdata from '../fixtures/testdata.json'
/// <reference types="Cypress" />


describe("ClickUp",()=>{

    beforeEach(() => {
        // cy.visit('/', { timeout: 10000 });
        LoginPage.login();
      });

    // it ("01_Verify the functionality of added cards in dashboard page",()=>{

    //     //Clicking on Dashboard
    //     cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]',{timeout:10000}).first().click();

        
        
    //     //Verifying the Dashboard is expanded
    //     cy.get('[data-test="accordion__toggle-side-drawer__expanded"]');
        

    //     // Click on any created dashboard option where user added the data
    //     cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
    //     cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();

    //     // Verify that dashboard details page should be opened
    //     cy.findByRole('switch',{name:'Edit mode:'}).should('exist');
        
      

    //     // Disable the toggle button of edit mode
    //     cy.findByRole('switch',{name:'Edit mode:'}).should('have.attr','aria-checked','false');
    //     // cy.pause();
    //     // cy.findByRole('switch',{name:'Edit mode:'}).click();

    //     // Hover over on the tile
    //     cy.findByRole('button',{name:'Chat'}).trigger('mouseover');
    //     // cy.pause();


    //     // Verify that 3 dots menu action icon & settings icon option should not visible

    //     // click on the 'comment' feed box
    //     cy.get('[data-test="comment-bar__editor"]').click();

    //     // verify that box should be editable
    //     // cy.get('[data-test="comment-bar__editor"]').should('have.attr','contenteditable','true');

    //     // Enter the comment in two different line
    //     cy.get('[data-test="comment-bar__editor"]').click().type('Hii \n hello').trigger('mouseover');
    //     cy.pause();

    //     // Verify the drag icon when user hover over on the added comment

    //     // Drag & drop the 2nd line comment to the first line


    //     // Verify that 2nd line should dragged into new line


    //     // Add emoji on any line and select the whole line
    //     cy.findByRole('button',{name:'Dropdown menu'}).click();
    //     cy.findByRole('region',{name:'Frequently Used'}).should('exist');
    //     cy.findByRole('region',{name:'List of emoji'}).should('exist');
    //     cy.findByLabelText('smiley').click().select();

    //     // Verify the action bar with different options
    //     cy.get('[data-test="toolbar-format-bold"]').should('exist');
    //     cy.get('[data-test="toolbar-format-italic"]').should('exist');
    //     cy.get('[data-test="toolbar-format-underline"]').should('exist');
    //     cy.findByRole('button',{name:'Dropdown menu'}).should('be.visible');



    //     // Click on the 'misc setting' icon from bar
    //     cy.findByRole('button',{name:'Dropdown menu'}).click();


    //     // Verify the drop down box should be opened
    //     cy.get('.cu-rich-editor-toolbar__row-menu-option-details-description').contains('Undo').should('exist');
    //     cy.get('.cu-rich-editor-toolbar__row-menu-option-details-description').contains('Redo').should('exist');
    //     cy.get('.cu-rich-editor-toolbar__row-menu-option-details-description').contains('Clear Format').should('exist');



    //     // Click on 'clear format' option & verify the relevant format text should be displayed without emoji
    //     cy.get('.cu-rich-editor-toolbar__row-menu-option-details-description').contains('Clear Format').click();
    //     cy.contains('Hi').should('be.visible');
    //     cy.contains('Hello').should('be.visible');


    //     // Click on 'comment' button
    //     cy.findByRole('button',{name:'COMMENT'}).click();


    //     // Verify that comment should be added 
    //     cy.get('[data-test="task-comment__header"]').should(exist);
    //     cy.get('[data-test="task-comment__header"]').should('contains','Hi');



            
    //     });

        after(() => {
          //Clearing the settings
          cy.get('.cu-filter-value-list-dropdown__toggle_selected').first().click();
          cy.get('[data-test="filter-value__clear"]').first().click();
          cy.get('[data-test="filter-value__clear"]').last().click();
          cy.findByRole('button',{name:'Apply'}).click();


        });

        it("02_Verify the functionality of added cards in dashboard page",()=>{
            // LoginPage.login();

            //Clicking on Dashboard
            cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').first().click();
    
            //Verifying the Dashboard is expanded
            cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');

            // Click on any created dashboard option where user added the data
            cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
            cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();

            // Verify that dashboard details page should be opened
            cy.findByRole('switch',{name:'Edit mode:'},{timeout:10000}).should('exist');
    
            // Clicking on Edit mode
            cy.findByRole('switch',{name:'Edit mode:'}).click();
    
            // Click on the 'filter' option
            cy.get('[data-test="filter-value-list-dropdown__toggle"]').first().click({force:true});


            // Verify the filter modal with opened search options
            cy.get('.cu-filter-value-list-dropdown__title').should('exist');
            cy.get('[data-test="search-input__input"]').should('exist');

            // Select filter option like 'assignee'
            cy.get('[data-test="filter-value-add-dropdown__item-Assignee"]').click();

            // verify the applied filter with other opened fields
            // cy.get('[data-test="filter-value__dropdown_type"] > [data-test="filter-value-add-dropdown"] > .cu-filter-value-add-dropdown__toggle').click();
            cy.findByRole('button',{name:'Select assignee'}).click();
            cy.get('[data-test="user-list__qatester75527@gmail.com"]').click();

            // click on the drop down icon from 'select option' field
            cy.get('[data-test="filter-value__dropdown_type"]').click();
            cy.get('[data-test="filter-value-add-dropdown__item-Status"]').click();

            // verify the filter modal with options
            cy.get('.cu-status-filter__toggle').click();
            cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').first().should('exist');
            cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').last().should('exist');

            // Mark the option as closed with indicate color
            cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').last().click();
            cy.get('[data-test="status-filter__confirm-button"]').click();

            // verify the status complete should be displayed in the box
            cy.get('.selected-status-list__label').contains('COMPLETE').should('be.visible');

            // Click on '+Add filter' & verify the filter modal options with different fields
            cy.get('.cu-filter-value-add-dropdown__add-container').click();
            cy.get('[data-test="filter-value-add-dropdown__item-Status"]').should('exist');
            cy.get('[data-test="filter-value-add-dropdown__item-Assignee"]').should('exist');

            // select any field which was added in your project & choose any 'select option' with date wise
            cy.get('[data-test="filter-value-add-dropdown__item-Due date"]').click();
            cy.findByRole('button',{name:'Select option'}).click();
            cy.get('[data-test="dropdown-list-item__Next week"]').click();

            // Verify that selected date should be visible on box
            cy.get('.cu-date-ext-filter__container-dropdown-text').contains('Next week').should('be.visible');

            // Click on the 'Apply' button & verify that modal should closed
            cy.findByRole('button',{name:'Apply'}).click();
            cy.get('.cu-filter-value-list-dropdown__title').should('not.exist');


            
                
            });

          after(() => {

            // Click on the 'rename' option
            cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();
            cy.get('[data-test="dropdown-list-item__Rename"]').click();


            // remove the text started with dashboard and add new title
            cy.get('[data-test="grid-layout-toolbar__input-text"]').click().clear().type('Testing 01');

          });

            it('03_Test Case 03',()=>{

            //Clicking on Dashboard
            cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').first().click();
    
            //Verifying the Dashboard is expanded
            cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');

            // Click on any created dashboard option where user added the data
            cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
            cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();

            // Verify that dashboard details page should be opened
            cy.findByRole('switch',{name:'Edit mode:'},{timeout:10000}).should('exist');

            // Click on the 3 dots action button from the right side options
            cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();

            // Verify the drop down options should be displayed
            cy.get('[data-test="dropdown-list-item__Rename"]').should('be.visible');
            cy.get('[data-test="dropdown-list-item__Duplicate"]').should('be.visible');
            cy.get('[data-test="dropdown-list-item__Remove from Favorites"]').should('be.visible');
            cy.get('[data-test="dropdown-list-item__Sharing & Permissions"]').should('be.visible');
            cy.get('[data-test="dropdown-list-item__Delete"]').should('be.visible');
            

            // click on the 'rename' option
            cy.get('[data-test="dropdown-list-item__Rename"]').click();

            // Verify the highlighted box with editable access
            // cy.get('[data-test="grid-layout-toolbar__input-text"]').should('have.attr','Can set value','true');

            // Click outside the box and verify the old existing name should be displayed
            cy.get('[data-pendo="dashboard__refresh"]').click();
            
            // Again click on the 'rename' option
            cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();
            cy.get('[data-test="dropdown-list-item__Rename"]').click();


            // remove the text started with dashboard and add new title
            cy.get('[data-test="grid-layout-toolbar__input-text"]').click().clear().type('New Dashboard');

            // verify the title updated on top & left sidebar
            // cy.get('[data-test="grid-layout-toolbar__input-text"]').should('have','New Dashboard');
            // cy.get('[data-test="grid-sidebar-item__name__New Dashboard"]').should('exist');

            // again Click on the 3 dots action button from the right side options
            cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();
            
            // click on the 'duplicate' option
            cy.get('[data-test="dropdown-list-item__Duplicate"]').click();

            // Verify the highlighted color with editable
            // Click outside the box and verify that duplicated name should auto fill
            // verify that duplicated page should be created
            // cy.findByRole('link',{name: "New Dashboard (1)"}).should('have.length', 1);;

            // again Click on the 3 dots action button from the right side options
            cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();

            // click on the 'delete' option
            cy.get('[data-test="dropdown-list-item__Delete"]').click();

            // verify that duplicated page should be deleted and display the previous page
            cy.findByRole('link',{name: "New Dashboard (1)"}).should('not.exist');


            });

            // before(() => {
              
            //   // Click on the 'rename' option
            //   cy.get('[data-test="grid-layout-toolbar__options-ellipsis"]').click();
            //   cy.get('[data-test="dropdown-list-item__Rename"]').click();


            //   // remove the text started with dashboard and add new title
            //   cy.get('[data-test="grid-layout-toolbar__input-text"]').click().clear().type('Testing 01');

            // });



            // it('04_Test Case 04',()=>{

            // //Clicking on Dashboard
            // cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').first().click();
    
            // //Verifying the Dashboard is expanded
            // cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');

            // // Click on any created dashboard option where user added the data
            // cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
            // cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();

            // // Verify that dashboard details page should be opened
            // cy.findByRole('switch',{name:'Edit mode:'},{timeout:10000}).should('exist');

            // // Click on the 'filter' option
            // cy.findByRole('switch',{name:'Edit mode:'}).click();
            // cy.findByRole('button',{name: "Filter"});

            // // Verify the filter modal with opened search options
            // cy.get('.cu-filter-value-list-dropdown__title').should('exist');
            // cy.get('[data-test="search-input__input"]').should('exist');

            // // Select any filter option status'
            // cy.get('[data-test="filter-value-add-dropdown__item-Status"]').click();
            
            // // verify the applied filter with other opened fields
            // // click on the drop down icon from 'select option' field
            // // verify the filter modal with options
            // // Mark the option as closed with indication color
            // // verify the status complete should be displayed in the box
            // // Click on the 'confirm' button & verify the modal should closed
            // // Click on the 'Apply' button & verify that modal should closed
            // // verify that filtered result should be displayed in the dashboard page (as per created dashboard) 
            // })
    

    });