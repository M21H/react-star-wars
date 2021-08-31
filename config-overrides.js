const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@ui': 'src/components/UI',
		'@const': 'src/const',
		'@const': 'src/const',
		'@hoc': 'src/hoc',
		'@pages': 'src/pages',
		'@services': 'src/services',
		'@styles': 'src/styles',
		'@utils': 'src/utils',
		'@routes': 'src/routes',
		'@assets': 'src/assets',
		'@hooks': 'src/hooks',
		'@store': 'src/store',
		'@context': 'src/context',
	})(config)

	return config
}
