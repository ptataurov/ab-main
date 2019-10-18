const dirs = require('../dirs')
const updateImports = require('../updateImports')
const { removeDir } = require('../utils')
const { existsSync } = require('fs')

const name = process.argv[2]

const path = `${dirs.views}/components/${name}`

if (existsSync(path)) {
  removeDir(path)
  updateImports()

  console.log(`Component ${name} successfully deleted`)
} else {
  const msg = `Component with the name ${name} not exists`

  throw new Error(msg)
}
