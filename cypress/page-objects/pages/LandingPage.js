import landingPage from '../../fixtures/landingPage.json'

export default class LandingPage {
	static checkTitle() {
		cy.get(landingPage.landingPageTitle).should(
			'contain',
			'The AirportLabs Ecosystem tailored to your operational needs'
		)
		cy.get(landingPage.communityAppTitle)
			.should('include.text', 'Community App')
			.and('have.css', 'font-size')
			.should('include', '24px')
	}
	static checkLogoImage() {
		cy.get(landingPage.communityAppImg)
			.should('be.visible')
			.should(([img]) => {
				expect(img.naturalWidth).to.equal(232)
				expect(img.naturalHeight).to.equal(152)
			})
	}
	static checkStatistic() {
		cy.get(landingPage.activitySectionTitle).should(
			'contain',
			'Our Activity in numbers'
		)
		cy.get(landingPage.usersStatisticNumber)
			.should('contain', '200k')
			.and('have.css', 'font-size')
			.should('contain', '40px')
		cy.get(landingPage.usersNumberDescription)
			.should('contain', 'Users worldwide')
			.and('have.css', 'font-size')
			.should('contain', '20px')
	}
}
