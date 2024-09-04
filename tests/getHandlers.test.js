const config = require('../config');
test('Should return 200 status code...', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`)
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});
test('Body should contain respone for GET...', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualResponseBody = await response.json()
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody.name).toBe("For picnic");
});
