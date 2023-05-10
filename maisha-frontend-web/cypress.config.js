const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'dcevn9',
  e2e: {
    setupNodeEvents (on, config) {

      // implement node event listeners here
    }
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'

    },
    defaultCommandTimeout: 100000
  }
})
