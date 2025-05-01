const { adminMappings } = require('./admin.mappings')

class AdminPage {
  constructor(page) {
    this.page = page
  }

  async clickAdminMenu() {
    await this.page.getByRole('link', { name: adminMappings.adminMenu }).click()
  }
}

module.exports = { AdminPage }
