const { loginMappings } = require('./login.mappings.js')

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(loginMappings.usernameInput)
    this.passwordInput = page.locator(loginMappings.passwordInput)
    this.loginButton = page.locator(loginMappings.loginButton)
  }

  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}

module.exports = { LoginPage }
