export default class SocialMediaLinks {
	static checkFacebookLink() {
		cy.get(
			`.logo-footer-container.w-inline-block[href='https://www.facebook.com/AirportLabs']`
		)
			.should('have.attr', 'href')
			.and('include', 'https://www.facebook.com/AirportLabs')
	}
	static checkInstagramLink() {
		cy.get(
			`.logo-footer-container.w-inline-block[href='https://www.instagram.com/airportlabspeople/']`
		)
			.should('have.attr', 'href')
			.and('include', 'https://www.instagram.com/airportlabspeople/')
	}
	static checkLinkedInLink() {
		cy.get(
			`.logo-footer-container.w-inline-block[href='https://www.linkedin.com/company/airport-labs/']`
		)
			.should('have.attr', 'href')
			.and('include', 'https://www.linkedin.com/company/airport-labs/')
	}
}
