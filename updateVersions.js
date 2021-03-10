const fs = require('fs')
const path = require('path')

;(async () => {
  const templates = fs
    .readdirSync(__dirname)
    .filter((d) => d.startsWith('template-'))
  for (const t of templates) {
    const pkgPath = path.join(__dirname, t, `package.json`)
    const pkg = require(pkgPath)

    console.log(t, pkg)

    pkg.devDependencies.vite = '^2.0.5'

    if (t.startsWith('template-vue')) {
      pkg.devDependencies['@vitejs/plugin-vue'] = '^1.1.5'
    }
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
  }
})()
