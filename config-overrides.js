const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@const': 'src/const',
		'@const': 'src/const',
		'@hoc': 'src/hoc',
		'@pages': 'src/pages',
		'@services': 'src/services',
		'@styles': 'src/styles',
		'@utils': 'src/utils',
	})(config)

	return config
}
