import { dashboardMappings } from './dashboard.mappings';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardMenu = page.locator(dashboardMappings.dashboardMenu)
  }

  async clickDashboardMenu() {
    await this.page.getByText(dashboardMappings.adminMenu).click()
  }
}

