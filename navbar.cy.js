/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com')
    });
    
    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click({shiftkey: true})
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('input[placeholder=\'Your Name\']').type('text')
    });
    
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'zero.webappsecurity.com')
        cy.get('h4').should('be.visible')
    });
})