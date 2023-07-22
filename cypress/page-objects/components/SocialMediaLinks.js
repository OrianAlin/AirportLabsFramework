import links from '../../fixtures/socialMediaLinks.json'

export default class SocialMediaLinks {
	static checkFacebookLink() {
		cy.get(links.facebook)
			.should('have.attr', 'href')
			.and('include', 'https://www.facebook.com/AirportLabs')
	}
	static checkInstagramLink() {
		cy.get(links.instagram)
			.should('have.attr', 'href')
			.and('include', 'https://www.instagram.com/airportlabspeople/')
	}
	static checkLinkedInLink() {
		cy.get(links.linkedIn)
			.should('have.attr', 'href')
			.and('include', 'https://www.linkedin.com/company/airport-labs/')
	}
}
