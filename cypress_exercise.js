/// <reference types="cypress" />

// TEST SCRIPT & ASSERTIONS =================================================
// describe('My First Test', () => {
//     it('clicking "type" shows the right headings', () => {
//         cy.visit('https://example.cypress.io')
        
//         cy.pause()

//         cy.contains('type').click()

//         cy.url().should('include', '/commands/actions')

//         cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
//         expect('fake@email.com').to.be.a('string');
//     });
// })

// INTERACTING WITH ELEMENTS =================================================
// describe('My First Test', () => {
//     it('Mencoba yang kutau', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html')

//         cy.url().should('include', '/commands/actions')

//         cy.get('[type="checkbox"]').should('not.be.visible').check({force: true}).should('be.checked')

//         cy.contains('Forgot your password').click()

//         cy.get('user_email').type('gwatinglie2@gmail.com').should('have.value', 'gwatinglie2@gmail.com')
//         expect('user_email').to.be.a('string');
        
//         cy.contains('submit').click()

//         cy.go('back')
        
//         cy.get('h3').contains('Forgotten Password')

//         cy.go('back')
        
//         cy.get('h3').contains('Log in to ZeroBank')
        
//     });
// })

// FIXTURES, STATIC DATA, & E2E LOGIN-LOGOUT =================================================
// const username = ['standard_user', 'problem_user', 'performance_glitch_user'];
// const password = 'secret_sauce';
// const randomuser = username[Math.floor(Math.random() * username.length)];

// describe('SAUCEDEMO WEB TESTING', () => {
//     before(() => {
//         cy.visit('https://www.saucedemo.com/')
//     });
//     it('Mencoba yang kutau', () => {
//         cy.visit('https://www.saucedemo.com/')
        
//         cy.url().should('include', '/commands/actions')

//         cy.get('Username').type(randomuser)
//         expect('Username').to.be.a('string');

//         cy.get('Password').type(password)
//         expect('Password').to.be.a('string');

//         cy.contains('login-button').click()
//         expect($el).to.have.class('header_secondary_container');

//         cy.contains('[id="react-burger-menu-btn"]').click()
//         expect($el).to.have.class('bm-item-list');

//         cy.contains('Logout').click()
        
//         cy.get('[class="login_wrapper"]').should('include.class', '[class="login_logo"]')
//     });
// });

// E2E SEARCHBOX =================================================================
describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    });
    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    });
});