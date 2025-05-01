
# e2eTests

## Overview
e2eTests is an end-to-end testing project designed to automate testing for a web application. The project uses Playwright, a popular testing framework, to write and run tests.

## Structure
The project is organized into the following directories:

- `e2eTests/`
  - `data/`
  - `pages-object/`
    - `login/`
    - `admin/`
  - `tests/`
  - `playwright.config.js`
  - `README.md`

- **pages-object**: contains page object classes that encapsulate the functionality of each page in the application.
- **tests**: contains test files that use the page object classes to write end-to-end tests.
- **data**: contains data files used to drive the tests.
- **playwright.config.js**: contains configuration settings for Playwright.

## Configuration
Update the [playwright.config.js](http://_vscodecontentref_/3) file to set the base URL for the application under test. For example:

```javascript
use: {
  baseURL: 'https://example.com',
}

## Objective
The objective of this project is to provide a comprehensive set of end-to-end tests for the web application, ensuring that it functions as expected and meets the required standards.

## Dependencies
The project depends on the following package:

- `@playwright/test`: provides the testing framework, APIs, test runner, and reporting capabilities.

## How to Run
To run the tests, follow these steps:

1. Install the dependencies by running:
   ```bash
   npm install
   ```
2. Configure the `playwright.config.js` file to point to the application under test.
3. Run the tests using the command:
   ```bash
   npx playwright test
   ```

## Additional Commands

- Run tests in headed mode:
  ```bash
  npx playwright test --headed



## Writing Tests
To write new tests, create a new file in the **tests** directory and import the relevant page object classes. Use the page object classes to write test steps that interact with the application.

For example:

```javascript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages-object/login/login.page';

test('should login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('username', 'password');
  await expect(page).toHaveURL('/dashboard');
});
```

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/your-username/e2eTests.git

## License
This project is licensed under the MIT License. See the LICENSE file for details.