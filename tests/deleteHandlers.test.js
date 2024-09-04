// eslint-disable-next-line no-undef
const fetch = require('node-fetch');
const config = require('../config');

// Test to check the status code
test('DELETE request should return status 200', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE'
        });
        
        console.log(response);
        const actualStatus = response.status;
        const responseBody = await response.json();
        
        console.log(actualStatus);
        console.log(responseBody);

        expect(actualStatus).toBe(200);
    } catch (error) {
        console.error('Error:', error);
    }
});

//Test2
test('Should be true...', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE'
		});
			// Extract response body
			const responseBody = await response.json();

			// Check response body
			expect(responseBody).toEqual({ ok: true });
		} catch (error) {
			console.error('Error:', error);
		}
	});
