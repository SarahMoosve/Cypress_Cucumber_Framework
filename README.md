# Cypress-Cucumber E-commerce Testing
This repository contains E2E tests for an e-commerce website using Cypress with the Cucumber framework. The project follows the Page Object Model (POM) design pattern, ensuring maintainability and scalability of the test suite.
## Project Structure
- Feature Files: Describes the various features to be tested. See `ecommerce.feature`.
- Step Definitions: Contains the implementation for the steps defined in the feature files.
    - `HomeStepDef.js`
    - `ShoppingStepDef.js`
- Initialization: Initialization operations can be found in BeforeEach.js, where data is initialized from a JSON file in the fixtures folder.
- Page Object Model: All locators are defined in the Page Object folder inside the support directory:

    - `PageObjectName1.js` - Contains locators and methods for the PageName1 page.
    - `PageObjectName2.js` - Contains locators and methods for the PageName2 page.

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
After opening, select the desired feature file or run all tests as needed.

5. Run a Specific Feature:
```bash
npx cypress run --spec "path/to/ecommerce.feature"
```


Page Object Model
The Page Object Model (POM) is a design pattern that allows for better test maintenance and reduces code duplication. A page object is created for each page of the application, and it encapsulates the page's locators and functions. By following the POM pattern, any changes in the UI can be easily managed in the page object, without having to change the test logic or step definitions.

