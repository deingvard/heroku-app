import { Page } from './Page';
import logger from '@wdio/logger';
import chai from 'chai';
const expect = chai.expect;
const log = logger('test-basic');

export class LoginPage extends Page {
	private get emailInput() {
		return $("input[type='email']");
	}
	private get passwordInput() {
		return $("input[type='password']");
	}
	private get loginButton() {
		return $("[ng-reflect-klass='button relative']");
	}
	private get unsuccessfulMessageLabel() {
		return $('.colored.lineHeight15.small');
	}

	/**
	 * Enter data on the Login form
	 * @param email string value
	 */
	public enterEmail(email: string) {
		log.info('Enter email: ' + email);
		this.emailInput.setValue(email);
	}

	/**
	 * Enter data on the Login form
	 * @param password string value
	 */
	public enterPassword(password: string) {
		log.info('Enter password: ' + password);
		this.passwordInput.setValue(password);
	}

	/**
	 * Click Login button
	 */
	public clickLoginButton() {
		log.info('Click Login button');
		this.loginButton.click();
	}

	/**
	 * Check Unsuccessful message label text
	 */
	public getUnsuccessfulMessageLabelText() {
		log.info('Check Unsuccessful message label text');
		expect(this.unsuccessfulMessageLabel.getText()).to.equal(
			'Invalid email or password'
		);
	}
}
