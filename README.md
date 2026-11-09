# E-Commerce Test Automation Framework

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod"/>
  <img src="https://img.shields.io/badge/Faker.js-00A98F?style=for-the-badge&logoColor=white" alt="Faker.js"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/Axe--core-7C3AED?style=for-the-badge&logoColor=white" alt="Axe-core"/>
  <img src="https://img.shields.io/badge/Allure-FF6A00?style=for-the-badge&logo=allure&logoColor=white" alt="Allure"/>
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Test_Automation-E--Commerce-blue?style=flat-square" alt="Test Automation"/>
  <img src="https://img.shields.io/badge/Testing-UI%20%7C%20API%20%7C%20Accessibility-green?style=flat-square" alt="Testing Types"/>
  <a href="https://github.com/rvitmonisha/Ecommerce-Test-Automation/actions/workflows/playwright.yml">
    <img src="https://github.com/rvitmonisha/Ecommerce-Test-Automation/actions/workflows/playwright.yml/badge.svg" alt="GitHub Actions Status"/>
  </a>
</p>

An end-to-end E-Commerce Test Automation Framework built using **Playwright and TypeScript**, designed to automate UI testing, API validation, accessibility testing and continuous integration.

The framework follows the **Page Object Model (POM)** design pattern to improve code reusability, maintainability and test organization.

**GitHub Repository:** [Ecommerce-Test-Automation](https://github.com/rvitmonisha/Ecommerce-Test-Automation)

---

## Project Overview

This project automates the testing of an e-commerce website using Playwright. It covers important user workflows such as registration, product browsing, shopping cart operations and checkout.

It also includes API testing, automated accessibility scanning, code-quality checks and Allure reporting.

**Demo Website:** https://automationexercise.com/

## Technologies Used

| Technology | Purpose |
|---|---|
| Playwright | Browser automation and testing |
| TypeScript | Programming language |
| Node.js | JavaScript runtime |
| Page Object Model | Test architecture |
| Faker.js | Dynamic test data generation |
| Axios | API testing |
| Zod | API response validation |
| ESLint | Code quality and linting |
| Axe-core | Accessibility testing |
| Allure | Test reporting |
| Git & GitHub | Version control |
| GitHub Actions | CI/CD automation |

## Key Features

### 1. UI Automation Testing
- Homepage and product page verification
- User registration
- Product browsing
- Add products to cart
- Update product quantity
- Remove products from cart
- Checkout and order placement

### 2. API Testing
- Automated product API testing
- HTTP response validation
- Product data validation
- Schema validation using Zod

### 3. Accessibility Testing
- Integrated Axe-core with Playwright
- WCAG 2.0 and 2.1 A/AA automated checks
- Detects color contrast issues
- Identifies buttons and links without accessible names
- Generates detailed accessibility findings

### 4. Code Quality
- ESLint integration
- TypeScript linting
- Automated code-quality checks

### 5. Test Reporting
- Allure test reports
- Screenshots on test failures
- Video recordings on test failures
- Accessibility JSON report attachment

### 6. CI/CD Integration
- GitHub Actions workflow
- Automatic test execution on push and pull requests
- ESLint validation
- Functional and API test execution
- Accessibility scanning
- Allure report artifact generation

## Project Structure

```text
playwright-typescript/
│
├── api/
│   └── productApi.ts
│
├── pages/
│   ├── HomePage.ts
│   ├── RegistrationPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── example.spec.ts
│   ├── product.spec.ts
│   ├── registration.spec.ts
│   ├── cart.spec.ts
│   ├── quantity.spec.ts
│   ├── remove-product.spec.ts
│   ├── checkout.spec.ts
│   ├── api.spec.ts
│   └── accessibility.spec.ts
│
├── test-data/
│   └── userData.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── eslint.config.mjs
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js (version 24)
- npm
- Git
- Visual Studio Code
- Java 17 (required for generating Allure reports)

### Step 1: Clone the repository

```bash
git clone https://github.com/rvitmonisha/Ecommerce-Test-Automation.git
```

### Step 2: Navigate to the project folder

```bash
cd Ecommerce-Test-Automation
```

### Step 3: Install dependencies

```bash
npm ci
```

### Step 4: Install Playwright browser

```bash
npx playwright install chromium
```

## Running the Tests

### Run all tests on Chromium

```bash
npx playwright test --project=chromium --workers=1
```

### Run functional and API tests

```bash
npx playwright test --project=chromium --workers=1 --grep-invert "Check homepage accessibility"
```

### Run individual test files

```bash
npx playwright test tests/product.spec.ts
npx playwright test tests/registration.spec.ts
npx playwright test tests/cart.spec.ts
npx playwright test tests/api.spec.ts
```

### Run accessibility testing

```bash
npx playwright test tests/accessibility.spec.ts --project=chromium --workers=1
```

**Note:** The demo website currently has known accessibility violations, including button-name, color-contrast and link-name issues. Therefore, the strict accessibility test may report failures. These findings are recorded rather than silently ignored.

## ESLint Commands

Check code quality:

```bash
npm run lint
```

Automatically fix supported lint issues:

```bash
npm run lint:fix
```

## Allure Reporting

Generate the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
npx allure open allure-report
```

Java 17 or a compatible Java runtime is required.

## CI/CD – GitHub Actions

This project uses GitHub Actions to automate testing whenever code is pushed or a pull request is created.

The workflow performs:

1. Repository checkout
2. Node.js setup
3. Java setup for Allure
4. Dependency installation
5. ESLint code-quality validation
6. Playwright browser installation
7. Functional and API test execution
8. Accessibility test execution
9. Allure report generation
10. Report artifact upload

The accessibility scan is configured to continue even when known accessibility violations are detected. Its findings remain available in the test report.

## Test Results

The functional and API test suite has successfully completed **9 tests** in the local Chromium run.

The accessibility scan separately identified three violation categories:

| Accessibility rule | Severity |
|---|---|
| button-name | Critical |
| color-contrast | Serious |
| link-name | Serious |

These results demonstrate how automated accessibility testing can identify usability issues in an existing website.

*Test results may vary depending on website availability and changes.*

## Learning Outcomes

- Practical experience with Playwright and TypeScript
- Understanding of Page Object Model architecture
- End-to-end browser automation
- API testing and schema validation
- Dynamic test data generation
- Accessibility testing using Axe-core
- Code-quality validation using ESLint
- Test reporting using Allure
- CI/CD automation using GitHub Actions

## Future Enhancements

- Cross-browser test execution in CI
- Visual regression testing
- Additional API test scenarios
- Data-driven testing
- Environment-based configuration
- Expanded accessibility coverage

## Author

**M N Monisha**

GitHub: [@rvitmonisha](https://github.com/rvitmonisha)

---

⭐ If you find this project useful, consider giving the repository a star!
