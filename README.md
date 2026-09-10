# **Customer management testing with Jest**

Many developers will be working on this app simultaneously and a number of new functionalities will be added. We should create unit tests to make sure that no functionality is accidentally broken.

Use proper node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

<br />

**Exercise 1.**

Create tests for the `CustomerList` component. These should be unit tests, so the `useAlert()` custom hook should be mocked.

Add tests that assert:
* An alert is rendered when `useAlert()` returns true.
* The alert is not rendered when `useAlert()` returns false.

Add another test to assert that the customer list is being rendered.

**Use test file `CustomerList.spec.js`**

<br />

**Exercise 2.**

Create a test for Customer Management. For this, components `CustomerForm` and `CustomerList` should be mocked. 
* The first unit test should assert that `CustomerForm` and `CustomerList` are rendered when the 'Login' button is clicked.
* The second unit test should assert that `CustomerForm` and `CustomerList` are not rendered when the 'Logout' button is clicked.

**Use test file `ClientManagement.spec.js`**

<br />

<ins>**Kata 4 common issues**<ins>

**VSCode config:**

- Install extension: Jest Runner
- Issue with pnpm: Go to Settings, search for “jest” in the top bar or search in the left menu Extensions &rarr; Test Runner Config. Remove any custom command in 'Jestrunner: Jest Command'.

**IntelliJ config:**

- Change node interpreter: Click right button on describe() &rarr; Modify Run Configuration... &rarr; Change node interpreter to Node 20

<br />

![Demo](https://github.com/ReactMrk/lifecycle-kata/blob/main/src/assets/hooks-kata-solution-kata.gif?raw=true)
