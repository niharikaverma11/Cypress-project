class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    fillUsername(username) {
        cy.findByRole('textbox',{name:'Email'}).click().clear().type(username);
    }
  
    fillPassword(password) {
        cy.findByLabelText('Password').click().clear().type(password);
    }
  
    clickLoginButton() {
        cy.findByRole('button',{name:'Log In'}).click().wait(20000);
    }

    verifypage() {
        cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]').should('be.visible');
        cy.wait(1000);
        
    }

    dashboardClick() {
        cy.get('[data-test="accordion__toggle-side-drawer__collapsed"]',{timeout:10000}).first().click();
    }

    dashboardverify() {
        cy.get('[data-test="accordion__toggle-side-drawer__expanded"]').should('be.visible');

    }

    addeditemsinDashboard() {
        cy.contains('.cu-grid-sidebar__header-title','Favorite dashboards').click();
        cy.get('[data-test="grid-sidebar-item__name__Testing 01"]').click();
    }

    verifyeditmode() {
        cy.findByRole('switch',{name:'Edit mode:'}).should('exist');
    }

    disablededitmode() {
        cy.findByRole('switch',{name:'Edit mode:'}).should('have.attr','aria-checked','false');
    }

    mousehoverTile(){

    }

    verifythreedotandsetting() {

    }

    clickcommentfeedbox() {
        cy.get('[data-test="comment-bar__editor"]').click();

    }

    commentintwolines() {
        cy.get('[data-test="comment-bar__editor"]').click().type('Hii \n hello').trigger('mouseover');

    }

    login() {
        const testdata = require('../fixtures/testdata.json');
        this.visit();
        this.fillUsername(testdata.username);
        this.fillPassword(testdata.password);
        this.clickLoginButton();
        this.verifypage();

      }
  }


  
  export default new LoginPage();

  