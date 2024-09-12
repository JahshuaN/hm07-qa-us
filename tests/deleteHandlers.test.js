const fetch = require('node-fetch');
const config = require('../config');

test('Should return status 200', async () => {
	let actualStatus;
	let responseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE'
        });
        actualStatus = response.status;
	responseBody = await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
	expect(actualStatus).toBe(200);
});

test('Response body should contain {ok: true}', async () => {
	let actualResponseBody;
    try {
	const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
		method: 'DELETE'
	});
	    actualResponseBody = await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
	expect(responseBody).toEqual({ ok: true });
});
