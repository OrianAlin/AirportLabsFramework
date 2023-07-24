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
import contact from '../fixtures/contactForm.json'
Cypress.Commands.add(
	'submitForm',
	(yourName, companyName, email, contactNumber, message) => {
		cy.get(contact.contactForm).should('be.visible')
		cy.get(contact.yourName).type(yourName)
		cy.get(contact.yourCompany).type(companyName)
		cy.get(contact.email).type(email)
		cy.get(contact.contactNumber).type(contactNumber)
		cy.get(contact.message).type(message)
		cy.get(contact.checkbox).click()
		cy.get(contact.submitButton).click()
	}
)
