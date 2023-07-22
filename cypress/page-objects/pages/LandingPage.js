export default class LandingPage {
	static checkTitle() {
		cy.get('#w-tabs-0-data-w-pane-0 > div > div > a:nth-child(2) > h4')
			.should('include.text', 'Community App')
			.and('have.css', 'font-size')
			.should('include', '24px')
	}
	static checkLogoImage() {
		cy.get('.image-6')
			.should('be.visible')
			.should(([img]) => {
				expect(img.naturalWidth).to.equal(176)
				expect(img.naturalHeight).to.equal(172)
			})
		// cy.get('.image-6').invoke('outerWidth').should('be.lt', 44)
		// cy.get('.image-6').invoke('outerHeight').should('be.lt', 43)
	}
}
