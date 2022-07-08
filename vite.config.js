const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.export = defineConfig({
  plugins: [react()],
})
