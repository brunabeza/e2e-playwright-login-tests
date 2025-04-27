// tests/loginForm.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { FormPage } = require('../pages/FormPage');

test('deve fazer login e acessar formulário de cadastro de funcionário', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const formPage = new FormPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  // Esperar a dashboard aparecer
  await expect(page).toHaveURL(/dashboard/);

  // Navegar até o menu "PIM" -> "Add Employee"
  await page.click('a:has-text("PIM")');
  await page.click('a:has-text("Add Employee")');

  // Validar que estamos no formulário "Add Employee"
  await formPage.assertOnFormPage();
});
