import { admindMappings } from './admin.mappings.js'

export class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminMenu = page.locator(adminMappings.adminMenu)
  }

  async clickDashboardMenu() {
    await this.page.getByText(adminMappings.adminMenu).click()
  }
}

