import { loginMappings } from './login.mappings'

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(loginMappings.usernameInput)
    this.passwordInput = page.locator(loginMappings.passwordInput)
    this.loginButton = page.locator(loginMappings.loginButton)
  }
  async login(username, password) {
    await this.page.goto('/login')
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}

