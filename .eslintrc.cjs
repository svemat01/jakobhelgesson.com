module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:lvksh/recommended'],
	plugins: ['svelte3', '@typescript-eslint', 'lvksh'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		"avoidEscape": true,
	}
};
