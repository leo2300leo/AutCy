describe('template spec', () => {
    it('passes', () => {
        // Set viewport to 1740px x 1024px
        cy.viewport(1740, 1024)
        // Page login 
      cy.visit('http://172.19.181.178/')
       //Login
      cy.get('#username').type('LCaetano')
      cy.get('#password').type('LCaetano@2024')
      cy.get('.btn-primary').click()

       //clique menu configuração
      cy.get(':nth-child(11) > efa-button-card.ng-star-inserted > .efa-button-card > .efa-button-card__wrapper > .efa-button-card__title').click()
       //clique opção gestão de acessos
      cy.get('#mat-tab-label-1-0 > .mdc-tab__content > .mdc-tab__text-label').click()
      // criar novo perfil de função
      cy.get('.efa-synoptic-detail-structure__center-content-top-title > div > .btn').click()
      
      cy.get('[style="width: 450px;"] > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('Leonardo Silva')
      
      cy.get('.margin-bottom-s > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('Adm')
      
      cy.get('#mat-mdc-checkbox-10-input').click()
      
      cy.get('.layout-settings-access_functions__footer > .btn-primary').click()
     
      cy.contains('Leonardo Silva')


      
    })
  })