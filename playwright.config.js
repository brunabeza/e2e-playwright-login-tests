// playwright.config.js
module.exports = {
  use: {
    headless: true, // Modo headless (sem interface gráfica)
    baseURL: 'https://opensource-demo.orangehrmlive.com', // URL base
    viewport: { width: 1280, height: 720 }, // Tamanho da janela do navegador
  },
};
