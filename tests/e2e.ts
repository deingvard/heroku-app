import { LoginSteps } from '../steps/LoginSteps';

let testData = require('../test-data/data');

describe('E2E Tests', () => {
	let loginSteps = new LoginSteps();

	beforeEach(() => {
		loginSteps.init();
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('Check that user can log into account', async () => {
		browser.pause(2000);
		// loginSteps.enterLoginInformationEmail(testData.email);
		// loginSteps.enterLoginInformationPassword(testData.password);
		// loginSteps.submitLoginInformation();
		// await loginSteps.checkLoginAuthorization();
	});
});
