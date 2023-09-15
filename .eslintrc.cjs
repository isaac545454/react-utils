/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
	env: { browser: true, es2020: true, node: true }, // Add 'node' environment
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'eslint-config-prettier',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 2020, sourceType: 'module' }, // Update ecmaVersion
	plugins: ['react', 'react-refresh', 'prettier', 'eslint-plugin-prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				...prettierOptions,
				endOfLine: 'auto',
			},
		],
		'react/prop-types': ['error'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
	},
	overrides: [
		{
			files: ['**/*.js?(x)'],
			rules: { 'prettier/prettier': ['error', prettierOptions] },
		},
	],
};