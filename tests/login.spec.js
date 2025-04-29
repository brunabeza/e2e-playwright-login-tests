import { test, expect } from '@playwright/test'
import { AdminPage } from '../pages-object/admin/admin.page'
import { LoginPage } from '../pages-object/login/login.page'

const { UserCollectionData } = require('../data/users/users.data')

test('Should login with valid credentials', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const adminPage = new AdminPage(page)
  const validUser = UserCollectionData.find(user => user.userType === 'valid-user')

  await loginPage.login(validUser.username, validUser.password)
  
  await adminPage.clickAdminMenu()
  await expect(page.getByText('Records Found')).toBeVisible()

})
