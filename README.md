# Cypress-Cucumber E-commerce Testing
This repository contains E2E tests for an e-commerce website using Cypress with the Cucumber framework. The project follows the Page Object Model (POM) design pattern, ensuring maintainability and scalability of the test suite.
## Project Structure
- Feature Files: Describes the various features to be tested. See `ecommerce.feature`. This file defines the scenarios and steps for the tests in `Gherkin` syntax.
- Step Definitions: `HomeStepDef.js` and `ShoppingStepDef.js` are the files which contain the step definitions that map the steps in the feature file to actual Cypress commands.

    - `BeforeEach.js`: This file contains setup code that runs before each test scenario. It will load the data from `example.json` and assign it to `this.data`. This means that step definitions can access this data using `this.data.name`, `this.data.email`, etc. This allows the mock data in the tests, making them more consistent and maintainable.

- Page Object Model: All locators are defined in the support>pageObject folder:

    - `HomePage.js` - Contains locators and methods for the `HomeStepDef.js` page.
    - `ShopPage.js` - Contains locators and methods for the `ShoppingStepDef.js` page.

## Setup & Installation
1. Clone the Repository:

git clone https://github.com/yourUsername/Cypress_Practice_Projects.git
cd Cypress_Practice_Projects
2. Install Dependencies:
```bash
npm install
```
3. Configuration: Ensure your configurations are correctly set in the appropriate .json file inside the fixtures folder.

4. Running the Tests
```bash
npx cypress open
```
After opening, select the desired feature file or run all tests as needed. OR

5. Run directly through a Feature file in headless mode:
```bash
npx cypress run --spec "path_to_project/Cypress_Cucumber_Framework/cypress/integration/UI/BDD/ecommerce.feature"
```

Page Object Model
The Page Object Model (POM) is a design pattern that allows for better test maintenance and reduces code duplication. A page object is created for each page of the application, and it encapsulates the page's locators and functions. By following the POM pattern, any changes in the UI can be easily managed in the page object, without having to change the test logic or step definitions.

