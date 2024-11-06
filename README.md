# **Client management testing**
Many developers will be working on this app simultaneously and a number of new functionalities will be added. We should create unit tests to make sure that no functionality is accidentally broken.

Use proper node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Exercise 1.**

Create a test for CustomerList component. The new tests should be a unit test, so the custom hook should be mocked.

As described in the file, you need to write a test to assert that an alert is rendered when the useAlert() custom hook returns true, and the alert is not rendered when the custom hook returns false.

In addition, a test should be added to assert that customers are being rendered.

Use test file CustomerList.spec.js

**Exercise 2.**

Create a test for Client Management, components CustomerForm and CustomerList should be mocked. The first unit test should assert that CustomerForm and CustomerList are rendered by default. The second test should assert that CustomerForm and CustomerList are not rendered when button is clicked. 

Use test file ClientManagement.spec.js