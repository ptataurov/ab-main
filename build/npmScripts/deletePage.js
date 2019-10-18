const dirs = require('../dirs')
const updateImports = require('../updateImports')
const { removeDir } = require('../utils')
const { existsSync } = require('fs')

const name = process.argv[2]

const path = `${dirs.views}/pages/${name}`

if (existsSync(path)) {
  removeDir(path)
  updateImports()

  console.log(`Page ${name} successfully deleted`)
} else {
  const msg = `Page with the name ${name} not exists`

  throw new Error(msg)
}
