const { chromium } = require('@playwright/test')
const config = require('../playwright.config')

const initializePlaywright = async () => {
  const browser = await chromium.launch({
    headless: config.use.headless,
  })

  const context = await browser.newContext({
    baseURL: config.use.baseURL,
    viewport: config.use.viewport,
  })

  const page = await context.newPage()

  return { browser, context, page }
}

module.exports = { initializePlaywright }
