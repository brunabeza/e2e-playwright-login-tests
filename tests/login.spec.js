import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages-object/login/login.page'
import { DashboardPage } from '../pages-object/dashboard/dashboard.page'
const { UserCollectionData } = require('../data/users/users.data')

test('Should login with valid credentials', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const dashboardPage = new DashboardPage(page)
  const validUser = UserCollectionData.find(user => user.userType === 'valid-user')

  await loginPage.login(validUser.username, validUser.password)
  
  await dashboardPage.clickDashboardMenu()
  await expect(page.getByText('System Users')).toBeVisible()

})
