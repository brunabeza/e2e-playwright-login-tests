const { adminMappings } = require('./admin.mappings.js');

class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.locator(adminMappings.adminMenu);
  }

  async clickAdminMenu() {
    await this.adminMenu.click();
  }
}

module.exports = { AdminPage };
