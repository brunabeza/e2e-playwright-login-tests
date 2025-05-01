const { Given, When, Then, Before } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { LoginPage } = require('../../pages-object/login/login.page')
const { AdminPage } = require('../../pages-object/admin/admin.page')
const { UserCollectionData } = require('../../data/users/users.data')
const { initializePlaywright } = require('../../helpers/playwrightHelper')

let page
let loginPage, adminPage

Before(async () => {
  const { browser, context, page: newPage } = await initializePlaywright()
  page = newPage
  loginPage = new LoginPage(page)
  adminPage = new AdminPage(page)
});

Given('I am on the login page', async () => {
  await page.goto('/')
});

When('I log in with valid credentials', async () => {
  const validUser = UserCollectionData.find(user => user.userType === 'valid-user')
  await loginPage.login(validUser.username, validUser.password)
});

When('I navigate to the admin menu', async () => {
  await adminPage.clickAdminMenu()
});

Then('I should see {string}', async (text) => {
  const textLocator = page.locator(`text=${text}`)
  await expect(textLocator).toBeVisible()
})