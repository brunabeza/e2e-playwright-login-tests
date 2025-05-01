const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const { LoginPage } = require('../../pages-object/login/login.page')
const { AdminPage } = require('../../pages-object/admin/admin.page')
const { adminMappings } = require('../../pages-object/admin/admin.mappings')
const { UserCollectionData } = require('../../data/users/users.data')
const { initializePlaywright } = require('../../helpers/playwrightHelper')

let page
let loginPage, adminPage

const VALID_USER_TYPE = 'valid-user'

Before(async () => {
  const { browser, context, page: newPage } = await initializePlaywright()
  page = newPage
  loginPage = new LoginPage(page)
  adminPage = new AdminPage(page)
})

After(async () => {
  await page.context().browser().close()
})

Given('I navigate to the login page', async () => {
  await page.goto('/')
})

When('I log in as a valid user', async () => {
  const validUser = UserCollectionData.find(user => user.userType === VALID_USER_TYPE)
  await loginPage.login(validUser.username, validUser.password)
  await page.waitForLoadState('networkidle')
})

When('I open the admin menu', async () => {
  await adminPage.clickAdminMenu()
})

Then('I should see the list of admin records', async () => {
  await expect(page.getByText(adminMappings.menuText)).toBeVisible()
})
