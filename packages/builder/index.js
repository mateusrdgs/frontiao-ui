#!/usr/bin/env node

const webpack = require('webpack')
const config = require('./webpack/webpack.config')

const cwd = process.cwd()
const compiler = webpack(config)
const component = cwd.split('/').pop()

console.log(`building ${component} component`)

compiler.run((runErr, stats) => {
  compiler.close((closeErr) => {
    const compilationError = stats.hasErrors() && stats.compilation.errors.pop()
    const err = runErr || closeErr || compilationError

    if (err) {
      console.error(`error when building ${component} component`)
      throw err.message
    }

    console.info(`${component} component builded successfully`)
  })
})