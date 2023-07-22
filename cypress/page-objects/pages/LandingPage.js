import landingPage from '../../fixtures/landingPage.json'

export default class LandingPage {
	static checkTitle() {
		cy.get(landingPage.communityAppTitle)
			.should('include.text', 'Community App')
			.and('have.css', 'font-size')
			.should('include', '24px')
	}
	static checkLogoImage() {
		cy.get(landingPage.communityAppImg)
			.should('be.visible')
			.should(([img]) => {
				expect(img.naturalWidth).to.equal(176)
				expect(img.naturalHeight).to.equal(172)
			})
		// cy.get('.image-6').invoke('outerWidth').should('be.lt', 44)
		// cy.get('.image-6').invoke('outerHeight').should('be.lt', 43)
	}
}
