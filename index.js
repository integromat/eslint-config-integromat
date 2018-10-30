module.exports = {
	env: {
		node: true,
		es6: true,
		mocha: true
	},
	rules: {
		// Possible Errors
		// http://eslint.org/docs/rules/#possible-errors
		// ---------------------------------------------
		// 'for-direction': 0,
		// 'getter-return': 2, // eslint:recommended
		// 'no-async-promise-executor': 0,
		// 'no-await-in-loop': 0,
		// 'no-compare-neg-zero': 2, // eslint:recommended
		'no-cond-assign': [2, 'except-parens'], // eslint:recommended
		'no-console': 0, // eslint:recommended
		// 'no-constant-condition': 2, // eslint:recommended
		// 'no-control-regex': 2, // eslint:recommended
		// 'no-debugger': 2, // eslint:recommended
		// 'no-dupe-args': 2, // eslint:recommended
		// 'no-dupe-keys': 2, // eslint:recommended
		// 'no-duplicate-case': 2, // eslint:recommended
		// 'no-empty': 2, // eslint:recommended
		// 'no-empty-character-class': 2, // eslint:recommended
		// 'no-ex-assign': 2, // eslint:recommended
		// 'no-extra-boolean-cast': 2, // eslint:recommended
		// 'no-extra-parens': 0,
		'no-extra-semi': 2, // eslint:recommended
		// 'no-func-assign': 2, // eslint:recommended
		// 'no-inner-declarations': 2, // eslint:recommended
		// 'no-invalid-regexp': 2, // eslint:recommended
		'no-irregular-whitespace': 2, // eslint:recommended
		// 'no-misleading-character-class': 0,
		// 'no-obj-calls': 2, // eslint:recommended
		// 'no-prototype-builtins': 0,
		// 'no-regex-spaces': 2, // eslint:recommended
		// 'no-sparse-arrays': 2, // eslint:recommended
		// 'no-template-curly-in-string': 0,
		'no-unexpected-multiline': 2, // eslint:recommended
		// 'no-unreachable': 2, // eslint:recommended
		// 'no-unsafe-finally': 2, // eslint:recommended
		// 'no-unsafe-negation': 0,
		// 'require-atomic-updates': 0,
		// 'use-isnan': 2 // eslint:recommended
		'valid-jsdoc': [2, {
			requireParamDescription: false,
			requireReturnDescription: false,
			requireReturn: false,
			prefer: {returns: 'return'},
		}],
		// 'valid-typeof': 2 // eslint:recommended


		// Best Practices
		// http://eslint.org/docs/rules/#best-practices
		// --------------------------------------------

		// 'accessor-pairs': 0,
		// 'array-callback-return': 0,
		// 'block-scoped-var': 0,
		// 'class-methods-use-this': 0,
		// 'complexity': 0,
		'consistent-return': 2,
		'curly': [2, 'multi-line'],
		// 'default-case': 0,
		// 'dot-location': 0,
		// 'dot-notation': 0,
		// 'eqeqeq': 0,
		'guard-for-in': 2,
		// 'max-classes-per-file': 0,
		// 'no-alert': 0,
		'no-caller': 2,
		// 'no-case-declarations': 2, // eslint:recommended
		// 'no-div-regex': 0,
		// 'no-else-return': 0,
		// 'no-empty-function': 0,
		// 'no-empty-pattern': 2, // eslint:recommended
		// 'no-eq-null': 0,
		// 'no-eval': 0,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		// 'no-extra-label': 0,
		// 'no-fallthrough': 2, // eslint:recommended
		// 'no-floating-decimal': 0,
		// 'no-global-assign': 0,
		// 'no-implicit-coercion': 0,
		// 'no-implicit-globals': 0,
		// 'no-implied-eval': 0,
		'no-invalid-this': 2,
		// 'no-iterator': 0,
		// 'no-labels': 0,
		// 'no-lone-blocks': 0,
		// 'no-loop-func': 0,
		// 'no-magic-numbers': 0,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-wrappers': 2,
		// 'no-octal': 2, // eslint:recommended
		// 'no-octal-escape': 0,
		// 'no-param-reassign': 0,
		// 'no-proto': 0,
		// 'no-redeclare': 2, // eslint:recommended
		// 'no-restricted-properties': 0,
		'no-return-assign': 2,
		// 'no-return-await': 0,
		// 'no-script-url': 0,
		// 'no-self-assign': 2, // eslint:recommended
		// 'no-self-compare': 0,
		// 'no-sequences': 0,
		'no-throw-literal': 2, // eslint:recommended
		// 'no-unmodified-loop-condition': 0,
		// 'no-unused-expressions': 0,
		// 'no-unused-labels': 2, // eslint:recommended
		// 'no-useless-call': 0,
		// 'no-useless-concat': 0,
		'no-useless-escape': 0,
		// 'no-useless-return': 0,
		// 'no-void': 0,
		// 'no-warning-comments': 0,
		'no-with': 2,
		// 'prefer-promise-reject-errors': 0,
		// 'radix': 0,
		// 'require-await': 0,
		// 'require-unicode-regexp': 0,
		// 'vars-on-top': 0,
		// 'wrap-iife': 0,
		// 'yoda': 0,

		// Strict Mode
		// http://eslint.org/docs/rules/#strict-mode
		// -----------------------------------------
		'strict': 0,

		// Variables
		// http://eslint.org/docs/rules/#variables
		// ---------------------------------------
		// 'init-declarations': 0,
		// 'no-delete-var': 2, // eslint:recommended
		// 'no-label-var': 0,
		// 'no-restricted-globals': 0,
		'no-shadow': [
			2,
			{
				'builtinGlobals': true,
				'hoist': 'functions',
				'allow': ['err', 'done', 'cb', 'module']
			}
		],
		'no-shadow-restricted-names': 2,
		'no-undef': 2, // eslint:recommended
		// 'no-undef-init': 0,
		// 'no-undefined': 0,
		'no-unused-vars': [2, {vars: 'all', args: 'after-used'}], // eslint:recommended
		'no-use-before-define': [
			2, 
			{
				functions: false,
				classes: true,
				variables: true
			}
		],

		// Node.js and CommonJS
		// http://eslint.org/docs/rules/#nodejs-and-commonjs
		// -------------------------------------------------
		// 'callback-return': 0,
		'global-require': 2,
		// 'handle-callback-err': 0,
		'no-buffer-constructor': 2,
		// 'no-mixed-requires': 0,
		'no-new-require': 2,
		// 'no-path-concat': 0,
		// 'no-process-env': 0,
		// 'no-process-exit': 0,
		// 'no-restricted-modules': 0,
		// 'no-sync': 0,

		// Stylistic Issues
		// http://eslint.org/docs/rules/#stylistic-issues
		// ----------------------------------------------
		'array-bracket-newline': 0, // eslint:recommended
		'array-bracket-spacing': [2, 'never'],
		'array-element-newline': 0, // eslint:recommended
		'block-spacing': [2, 'never'],
		'brace-style': 2,
		'camelcase': [2, {properties: 'never'}],
		// 'capitalized-comments': 0,
		'comma-dangle': [2, 'always-multiline'],
		'comma-spacing': 2,
		'comma-style': 2,
		'computed-property-spacing': 2,
		// 'consistent-this': 0,
		'eol-last': 2,
		'func-call-spacing': 2,
		// 'func-name-matching': 0,
		'func-names': 1,
		// 'func-style': 0,
		'function-paren-newline': [2, 'consistent'],
		// 'id-blacklist': 0,
		// 'id-length': 0,
		// 'id-match': 0,
		//'implicit-arrow-linebreak': 0,
		'indent': [
			2,
			'tab',
			{
				MemberExpression: 'off'
			}
		],
		// 'jsx-quotes': 0,
		'key-spacing': 2,
		'keyword-spacing': 2,
		// 'line-comment-position': 0,
		'linebreak-style': 2,
		// 'lines-around-comment': 0,
		// 'lines-between-class-members': 0,
		// 'max-depth': 0,
		'max-len': [
			2, 
			{
				code: 160,
				tabWidth: 4,
				ignoreUrls: true,
			}
		],
		// 'max-lines': 0,
		// 'max-lines-per-function': 0,
		// 'max-nested-callbacks': 0,
		// 'max-params': 0,
		// 'max-statements': 0,
		// 'max-statements-per-line': 0,
		// 'multiline-comment-style': 0,
		// 'multiline-ternary': 0,
		'new-cap': 2,
		// 'new-parens': 0,
		// 'newline-per-chained-call': 0,
		'no-array-constructor': 2,
		// 'no-bitwise': 0,
		// 'no-continue': 0,
		// 'no-inline-comments': 0,
		// 'no-lonely-if': 0,
		// 'no-mixed-operators': 0,
		'no-mixed-spaces-and-tabs': 2, // eslint:recommended
		// 'no-multi-assign': 0,
		'no-multiple-empty-lines': [2, {max: 2}],
		// 'no-negated-condition': 0,
		// 'no-nested-ternary': 0,
		'no-new-object': 2,
		// 'no-plusplus': 0,
		'no-restricted-syntax': [
			2,
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			}
		],
		'no-tabs': 0,
		// 'no-ternary': 0,
		'no-trailing-spaces': 2,
		// 'no-underscore-dangle': 0,
		'no-unneeded-ternary': 0,
		// 'no-whitespace-before-property': 0,
		'nonblock-statement-body-position': [2, 'beside'],
		// 'object-curly-newline': 0,
		'object-curly-spacing': [2, 'always'],
		// 'object-property-newline': 0,
		'one-var': [2, {
			var: 'never',
			let: 'never',
			const: 'never',
		}],
		// 'one-var-declaration-per-line': 0,
		// 'operator-assignment': 0,
		// 'operator-linebreak': 0,
		'padded-blocks': [2, 'never'],
		// 'padding-line-between-statements': 0,
		// 'prefer-object-spread': 0,
		'quote-props': [2, 'consistent'],
		'quotes': [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'require-jsdoc': 0,
		'semi': 2,
		'semi-spacing': 2,
		'semi-style': [2, 'last'],
		// 'sort-keys': 0,
		// 'sort-vars': 0,
		'space-before-blocks': 2,
		'space-before-function-paren': [2, {
			asyncArrow: 'always',
			anonymous: 'never',
			named: 'never',
		}],
		// 'space-in-parens': 0,
		// 'space-infix-ops': 0,
		// 'space-unary-ops': 0,
		'spaced-comment': [2, 'always'],
		'switch-colon-spacing': 2,
		// 'template-tag-spacing': 0,
		// 'unicode-bom': 0,
		// 'wrap-regex': 0,

		// ECMAScript 6
		// http://eslint.org/docs/rules/#ecmascript-6
		// ------------------------------------------
		// 'arrow-body-style': 0,
		'arrow-parens': 0,
		// 'arrow-spacing': 0,
		'constructor-super': 2, // eslint:recommended
		'generator-star-spacing': [2, 'after'],
		// 'no-class-assign': 0,
		'no-confusing-arrow': [2, {'allowParens': true}],
		// 'no-const-assign': 0, // eslint:recommended
		// 'no-dupe-class-members': 0, // eslint:recommended
		// 'no-duplicate-imports': 0,
		'no-new-symbol': 2, // eslint:recommended
		// 'no-restricted-imports': 0,
		'no-this-before-super': 2, // eslint:recommended
		// 'no-useless-computed-key': 0,
		// 'no-useless-constructor': 0,
		// 'no-useless-rename': 0,
		'no-var': 2,
		// 'object-shorthand': 0,
		'prefer-arrow-callback': 2,
		'prefer-const': [1, {destructuring: 'all'}],
		// 'prefer-destructuring': 0,
		// 'prefer-numeric-literals': 0,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		// 'prefer-template': 0,
		// 'require-yield': 2, // eslint:recommended
		'rest-spread-spacing': 2,
		// 'sort-imports': 0,
		// 'symbol-description': 0,
		// 'template-curly-spacing': 0,
		'yield-star-spacing': [2, 'after']
	}
}