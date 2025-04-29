import { adminMappings } from './admin.mappings'

export class AdminPage {
  constructor(page) {
    this.page = page
    this.adminMenu = page.locator(adminMappings.adminMenu)
  }

  async clickAdminMenu() {
    await this.adminMenu.click()
  }
}