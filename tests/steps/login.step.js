const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { LoginPage } = require('../../pages-object/login/login.page')
const { AdminPage } = require('../../pages-object/admin/admin.page')
const { adminMappings } = require('../../pages-object/admin/admin.mappings')
const { loginMappings } = require('../../pages-object/login/login.mappings')
const { UserCollectionData } = require('../../data/users/users.data')
const { initializePlaywright } = require('../../helpers/playwrightHelper')

let page, browser

const VALID_USER_TYPE = 'valid-user'
const INVALID_USER_TYPE = 'invalid-user'

Before(async () => {
  const playwright = await initializePlaywright()
  browser = playwright.browser
  page = playwright.page
})

After(async () => {
  await browser.close()
})

Given('I navigate to the login page', async () => {
  await page.goto('/')
})

When('I log in as a valid user', async () => {
  const loginPage = new LoginPage(page) 
  const validUser = UserCollectionData.find(user => user.userType === VALID_USER_TYPE)
  await loginPage.login(validUser.username, validUser.password)
  await page.waitForLoadState('networkidle')
})

When('I log in as an invalid user', async () => {
  const loginPage = new LoginPage(page) 
  const invalidUser = UserCollectionData.find(user => user.userType === INVALID_USER_TYPE)
  await loginPage.login(invalidUser.username, invalidUser.password)
  await page.waitForLoadState('networkidle')
})

When('I open the admin menu', async () => {
  const adminPage = new AdminPage(page)  
  await adminPage.clickAdminMenu()
})

Then('I should see the list of admin records', async () => {
  await expect(page.getByText(adminMappings.menuText)).toBeVisible()
})

Then('an error message should be displayed', async () => {
  await expect(page.locator(loginMappings.loginInvalidMessage)).toBeVisible()
  await expect(page.locator(loginMappings.loginInvalidMessage)).toHaveText('Invalid credentials')
  //await expect(loginInvalidMessage).toHaveText('Invalid credentials')
})