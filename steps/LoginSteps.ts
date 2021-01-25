import { LoginPage } from '../pageobjects/LoginPage';
import { RestClient } from '../utils/RestClient';
let testData = require('../test-data/data');

export class LoginSteps {
	private loginPage: LoginPage;

	/**
	 * Initialize Login Page
	 */
	public init() {
		this.navigateToDirect();
		this.loginPage = new LoginPage();
	}

	/**
	 * Navigate to direct site
	 */
	public navigateToDirect() {
		browser.maximizeWindow();
		browser.url(`https://${browser.config.baseUrl}/login`);
	}

	/**
	 * Enter data on the page
	 * @param email string value
	 */
	public enterLoginInformationEmail(email: string) {
		this.loginPage.enterEmail(email);
	}

	/**
	 * Enter data on the page
	 * @param password string value
	 */
	public enterLoginInformationPassword(password: string) {
		this.loginPage.enterPassword(password);
	}

	/**
	 * Click Login button to submit Login information page
	 */
	public submitLoginInformation() {
		this.loginPage.clickLoginButton();
	}

	/**
	 * Check Login information using REST API
	 */
	public async checkLoginAuthorization() {
		const restClient = new RestClient();
		await restClient.checkAuthorization(testData.email, testData.password);
	}

	/**
	 * Check unsuccessful message label text
	 */
	public checkUnsuccessfulMessageLabelText() {
		this.loginPage.getUnsuccessfulMessageLabelText();
	}
}
