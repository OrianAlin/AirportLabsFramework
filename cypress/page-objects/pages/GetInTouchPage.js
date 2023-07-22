export default class GetInTouchPage {
	static clickContactLink() {
		cy.get('.nav-link---contact.w-inline-block').click()
	}
	static checkPageElements() {
		cy.get('.display-heading.h1.left')
			.should('be.visible')
			.and('have.text', "Let's get in touch")
		cy.get(`div[class='header-section wf-section']`).should('be.visible')
		cy.get('.load-second').should('be.visible')
		cy.get('.w-layout-grid.contact-us').should('be.visible')
	}
}
