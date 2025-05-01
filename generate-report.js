const cucumberHtmlReporter = require('cucumber-html-reporter')
const path = require('path')
const reportJsonPath = path.join(__dirname, 'reports/cucumber-report.json')

const options = {
  theme: 'bootstrap',
  jsonFile: reportJsonPath,
  output: path.join(__dirname, 'reports/index.html'),
  reportSuiteAsScenarios: true,
  launchReport: true
}

cucumberHtmlReporter.generate(options)
