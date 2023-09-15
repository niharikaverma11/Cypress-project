class Filter01 {
    clickDashboard() {
        cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').first().click();
    }
  
    verifyDashboard() {
        cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');
    }
  
    clickexistedDashboard() {
        cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
        cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();
    }
  
    verifydetailDashboard() {
        cy.findByRole('switch',{name:'Edit mode:'},{timeout:10000}).should('exist');
    }

    clickEditmode() {
        cy.findByRole('switch',{name:'Edit mode:'}).click();
        
    }

    clickFilter() {
        cy.get('[data-test="filter-value-list-dropdown__toggle"]').first().click({force:true});
    }

    verifyfiltermodal() {
        cy.get('.cu-filter-value-list-dropdown__title').should('exist');
        cy.get('[data-test="search-input__input"]').should('exist');

    }

    selectassignee() {
        cy.get('[data-test="filter-value-add-dropdown__item-Assignee"]').click();
    }

    verifyapplyfilterandotheroptions() {
        cy.findByRole('button',{name:'Select assignee'}).click();
        cy.get('[data-test="user-list__qatester75527@gmail.com"]').click();
    }

    selectoptionfromdropdown() {
        cy.get('[data-test="filter-value__dropdown_type"]').click();
        cy.get('[data-test="filter-value-add-dropdown__item-Status"]').click();
    }

    verifyfiltermodaloption(){
        cy.get('.cu-status-filter__toggle').click();
        cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').first().should('exist');
        cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').last().should('exist');

    }

    markcloseindicator() {
        cy.get('.cu-status-filter-type-block__inner > .cu-status-filter > .cu-checkbox__label').last().click();
        cy.get('[data-test="status-filter__confirm-button"]').click();

    }

    verifycompletestatus() {
        cy.get('.selected-status-list__label').contains('COMPLETE').should('be.visible');

    }

    clickplusAddfilter() {
        // cy.get('.cu-filter-value-add-dropdown__add-container').click();
        cy.get('[data-test="filter-value-list__add_filter"]').click();
        cy.get('[data-test="filter-value-add-dropdown__item-Status"]').should('exist');
        cy.get('[data-test="filter-value-add-dropdown__item-Assignee"]').should('exist');

    }

    selectanyfield() {
        cy.get('[data-test="filter-value-add-dropdown__item-Due date"]').click();
        cy.findByRole('button',{name:'Select option'}).click();
        cy.get('[data-test="dropdown-list-item__Next week"]').click();

      }

    verifyselecteddate(){
        cy.get('.cu-date-ext-filter__container-dropdown-text').contains('Next week').should('be.visible');
    }

    clickonApply(){
        cy.findByRole('button',{name:'Apply'}).click();
        cy.get('.cu-filter-value-list-dropdown__title').should('not.exist');
    }

    clearingsetting(){
        cy.get('.cu-filter-value-list-dropdown__toggle_selected').click();
        cy.get('[data-test="filter-value__clear"]').first().click();
        cy.get('[data-test="filter-value__clear"]').last().click();
        cy.findByRole('button',{name:'Apply'}).click();
    }
  }


  
  export default new Filter01();

  