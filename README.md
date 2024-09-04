Sprint 7 Project
Description
Each of the four tests are focusing on making sure that the API endpoints are returning the expected status codes and response bodies for different types of request.

Technologies and Techniques
JavaScript/Node.js/VScode: The core language and runtime environment for building the tests.

Jest: The testing framework used to write and run unit and integration tests.
Fetch API: Used for making HTTP requests to the API endpoints.
Postman: Utilized for manual API testing and validating endpoints before automation.
Swagger /api/swagger/ for checking the url end point -API Doc /docs/ for checking endpoints
Running Tests
follow these steps the get started with project

Clone the Repository:
git clone https://github.com/your-username/your-repo.git
cd your-repo
install dependencies: npm install
Create Config file in the root directory: module.exports = {API_URL: 'https://insert url.com'}
Run the test with either npx jest tests/deleteHandlers.test.js, npx jest tests/putHandlers.test.js, npx jest tests/postHandlers.test.js, or npx jest tests/getHandlers.test.js
check the output for either passing or failing tests along with error messages
