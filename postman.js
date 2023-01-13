describe('Get Users', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });

 it('Add a new user', () => {
    var user = {
        "name": 'Fira Rohim',
        "job": 'Test Engineer'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.deep.equal(user.name)
    })
})

it('Update user', () => {
    var newUser = {
        "name": 'Oim Trust',
        "job": 'Engineering Manager'
    } 
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(newUser.name)

    })
})

it.only('Delete user', () => {
    cy.request('DELETE', 'https:reqres.in/api/users/2').then((response) => {
        expect(response.status).equal(204)
    })
})

it('Successfully login by appending username and password in URL', function () {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
})

it('Successfully login using headers', function () {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
        headers: {
            authorization: 'Basic YWRtaW46YWRtaW4='
        },
        failOnStatusCode: false
    })
    cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
})

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
      username: email,
      password,
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      cy.setCookie('userName', response.body.userName)
      cy.visit('/#!/main')
    })
 })
 
 it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
});
