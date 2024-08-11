// eslint-disable-next-line no-undef
const config = require('../config');

//First Test Case
test('Should return 200 status code...', async () => {
    let actualStatus;
    try {
        console.log(config.API_URL); // Check the API URL before fetching
        
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

//Second Test Case
test('Body should contain respone for GET...', async () => {
    let actualResponseBody = null;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json()
    } catch (error) {
        console.error(error);
    }
    if (actualResponseBody) {
        expect(actualResponseBody.name).toBe("For picnic");
    } else {
        throw new Error("The response body is null or undefined.");
    }
    expect(actualResponseBody.name).toBe("For picnic");
});