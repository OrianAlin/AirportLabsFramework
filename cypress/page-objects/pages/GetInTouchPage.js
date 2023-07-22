import contact from '../../fixtures/getInTouchPage.json'
export default class GetInTouchPage {
	static clickContactLink() {
		cy.get(contact.contactLink).click()
	}
	static checkPageElements() {
		cy.get(contact.title)
			.should('be.visible')
			.and('have.text', "Let's get in touch")
		cy.get(contact.upperSection).should('be.visible')
		cy.get(contact.secondSection).should('be.visible')
		cy.get(contact.contactUs).should('be.visible')
	}
}
