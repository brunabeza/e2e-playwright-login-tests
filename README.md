# E2E Tests with Playwright and Cucumber

This project contains end-to-end (E2E) automated tests using [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/) in JavaScript. It follows the Page Object Model (POM) design pattern and is structured for maintainability and scalability.

## 📁 Project Structure

```
├── .github/workflows/        # GitHub Actions CI configuration
├── data/                     # Test data
│   └── users/                # User credentials and related data
├── helpers/                 # Utility functions
├── pages-object/            # Page Objects (POM structure)
│   ├── login/               # Login page objects and mappings
│   └── admin/               # Admin page objects and mappings
├── reports/                 # Generated test reports
├── tests/
│   ├── features/            # Cucumber feature files
│   └── steps/               # Step definitions
├── .gitignore               # Files ignored by Git
├── cucumber.js              # Cucumber configuration
├── generate-report.js       # Script to generate HTML report
├── package.json             # Project metadata and scripts
├── package-lock.json        # Dependency lock file
├── playwright.config.js     # Playwright configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/e2eTests.git
cd e2eTests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the tests

```bash
npm test
```

### 4. Generate the HTML report

```bash
npm run report
```

The report will be available in the `reports/` folder.

## 🧪 Scripts

| Command           | Description                          |
|------------------|--------------------------------------|
| `npm test`       | Executes all E2E tests               |
| `npm run report` | Generates HTML report from results   |

## 🛠 Technologies Used

- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Node.js](https://nodejs.org/)

## ✅ CI Integration

This project uses GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/e2e.yml` and runs the tests on every push or pull request.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.
