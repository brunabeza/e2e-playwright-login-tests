import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages-object/login/login.page'
const { UserCollectionData } = require('../data/users/users.data')

test('Should login with valid credentials', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const validUser = UserCollectionData.find(user => user.userType === 'valid-user')

  await loginPage.login(validUser.username, validUser.password);
  // Exemplo de validação depois do login
  await expect(page).toHaveURL('/dashboard'); // ajuste conforme seu app
  await expect(page.locator('text=Bem-vindo')).toBeVisible(); // ajuste conforme seu app
})
