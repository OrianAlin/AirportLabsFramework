// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add(
	'submitForm',
	(yourName, companyName, email, contactNumber, message) => {
		cy.get('#w-node-_0d30e78c-bcdd-6a6d-b59a-28985b6b320b-91e38efd').should(
			'be.visible'
		)
		cy.get('#Your-Name').type(yourName)
		cy.get('#Company-Name').type(companyName)
		cy.get('#email').type(email)
		cy.get('#Contact-Number').type(contactNumber)
		cy.get('#Message').type(message)
		cy.get(
			'.w-checkbox-input.w-checkbox-input--inputType-custom.checkbox'
		).click()
		// cy.contains(`input[value='Submit Application']`).click()
	}
)
