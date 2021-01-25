import * as WebRequest from 'web-request';
import logger from '@wdio/logger';
const log = logger('test-basic');
import chai from 'chai';
const expect = chai.expect;

export class RestClient {
	/**
	 * Check Login information using REST API
	 */
	public async checkAuthorization(email, password) {
		log.info('Check Login information using REST API');
		const response = await WebRequest.post(
			`https://rest.interactio.dev/v3/user/login`,
			{
				headers: {
					'content-type': 'application/json',
				},
				form: {
					email: email,
					password: password,
				},
			}
		);
		expect(response.statusCode).to.equal(200);
	}
}
