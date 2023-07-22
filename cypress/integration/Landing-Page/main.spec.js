/// <reference types="cypress" />
import {
	url,
	yourName,
	companyName,
	email,
	contactNumber,
	message,
} from '../../../config'
import LandingPage from '../../page-objects/pages/LandingPage'
import GetInTouchPage from '../../page-objects/pages/GetInTouchPage'
import SocialMediaLinks from '../../page-objects/components/SocialMediaLinks'

describe('AirportLabs Framework', () => {
	beforeEach(function () {
		cy.visit(url)
	})
	it('Should check Community App Title from Landing Page', () => {
		LandingPage.checkTitle()
	})
	it('Should check Get in touch section', () => {
		GetInTouchPage.clickContactLink()
		GetInTouchPage.checkPageElements()
		cy.submitForm(yourName, companyName, email, contactNumber, message)
	})
	it('Should check Social Media Links', () => {
		SocialMediaLinks.checkFacebookLink()
		SocialMediaLinks.checkInstagramLink()
		SocialMediaLinks.checkLinkedInLink()
	})
	it('Check AirPortLabs logo', () => {
		LandingPage.checkLogoImage()
	})
})