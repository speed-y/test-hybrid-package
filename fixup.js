import fs from 'fs-extra'

fs.copyFileSync('package.json', './lib/package.json')
fs.writeFileSync(
	'./lib/cjs/package.json',
	JSON.stringify({ type: 'commonjs' }, null, '\t')
)
