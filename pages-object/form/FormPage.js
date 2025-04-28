// pages/FormPage.js
const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;
    this.addEmployeeTitle = page.locator('h6'); // Título da página "Add Employee"
  }

  async assertOnFormPage() {
    await expect(this.addEmployeeTitle).toHaveText('Add Employee');
  }
}

module.exports = { FormPage };
