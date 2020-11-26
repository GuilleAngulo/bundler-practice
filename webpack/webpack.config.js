const entry = require('./.webpack/entry')
const output = require('./.webpack/output')
const rules = require('./.webpack/rules')
const plugins = require('./.webpack/plugins')
const options = require('./.webpack/options')

module.exports = (env, { mode }) => ({
    entry,
    output,
    module: {
        rules
    },
    plugins: plugins(mode),
    ...options(mode),
})