const dirs = require('./dirs')

const { getDirectoriesBasenames } = require('./utils')
const { writeFileSync, appendFileSync } = require('fs')

const updateImports = () => {
    const pages = getDirectoriesBasenames(dirs.pages)
    const components = getDirectoriesBasenames(dirs.components)

    writeFileSync(`${dirs.views}/_imports.js`, '')
    writeFileSync(`${dirs.views}/_imports.pug`, '')

    appendFileSync(
        `${dirs.views}/_imports.js`,
        'import \'../assets/scss/common.scss\'\n'
    )

    const writeImports = (name, isPage) => {
        const path = isPage ? './pages' : './components'

        const map = {
            js: `import '${path}/${name}/${name}'
import '${path}/${name}/${name}.scss'
`,
            pug: `include ~@/components/${name}/${name}\n`
        }

        for (let key in map) {
            if (isPage && key === 'pug') continue

            const data = map[key]

            appendFileSync(`${dirs.views}/_imports.${key}`, data)
        }
    }

    pages.forEach(page => {
        writeImports(page, true)
    })

    components.forEach(component => {
        writeImports(component)
    })
}

module.exports = updateImports
