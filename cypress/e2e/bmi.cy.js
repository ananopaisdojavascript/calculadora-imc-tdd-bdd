/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('calculate the BMI', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/src/index.html')
  })

  it('should display an image of a bowl of salad', () => {
    cy.get('[data-test="bmi-image"]').should('be.visible')
  })

  it('should display a form', () => {
    cy.get('[data-test="bmi-form"]').should('be.visible')
  })

  it('should display a title', () => {
    cy.get('[data-test="bmi-title"]').should('have.text', 'Calculadora de IMC')
  })

  it('should display a field to insert the weight', () => {
    cy.get('[data-test="bmi-weight"]').should('be.visible')
  })

  it('should display a field to insert the height', () => {
    cy.get('[data-test="bmi-height"]').should('be.visible')
  })

  it('should display a button to calculate the BMI', () => {
    cy.get('[data-test="bmi-button"]').should('be.visible')
  })

  it('should add the weight', () => {
    cy.get('[data-test="bmi-weight"]').type('70')
  })
  
  it('should add the height', () => {
    cy.get('[data-test="bmi-height"]').type('1.75')
  })

  it('should click on the button to calculate the BMI', () => {
    cy.get('[data-test="bmi-button"]').click()
  })

  it('should click on the button to go back to the form', () => {
    cy.get('[data-test="bmi-result-button-back"]').click({force: true})
  })

  // it('should display a title with the text "Resultado"', () => {
  //   cy.get('[data-test="bmi-result-main"]').should('have.text', 'Resultado')
  // })
  
  // it('should display a text about the BMI', () => {
  //   cy.get('[data-test="bmi-result-text"]').should('have.text', 'Seu Índice de Massa Corporal')
  // })
  
  // it('should display the BMI', () => {
  //   cy.get('[data-test="bmi-result"]').should('be.visible')
  // })
  
  // it('should display a text about the status', () => {
  //   cy.get('[data-test="bmi-result-status-text"]').should('have.text', 'Sua Classificação')
  // })
  
  // it('should display the status', () => {
  //   cy.get('[data-test="bmi-result-status"]').should('be.visible')
  // })
  
  // it('should display a button to go back to the form', () => {
  //   cy.get('[data-test="bmi-result-button-back"]').should('be.visible')
  // })

  // it('should display an image of a bowl of salad', () => {
  //   cy.get('[data-test="bmi-result-image"]').should('be.visible')
  // })
})