'use strict';

const BrowserTemplateProvider = require('../browser/TemplateProvider');

class TemplateProvider extends BrowserTemplateProvider {

	constructor(locator) {
		super(locator);

		this._merge = this._pug.runtime.merge;
	}

	/**
	 * Determines if the template provider can compile the template.
	 * @param {string} filename Absolute path to the template file.
	 * @param {string} templateString Template content.
	 * @returns {boolean} true if the provider is able to compile the template.
	 */
	isTemplateSupported(filename, templateString) {
		return /(\.jade|\.pug)$/i.test(filename);
	}

	/**
	 * Compiles (precompiles) Pug template.
	 * http://pug-lang.com/api/
	 * @param {string} source Template source.
	 * @returns {string} Precompiled source (template specification).
	 */
	compile(source) {
		this._puhOptions = this._puhOptions || {};
		if (this._puhOptions.externalRuntime === undefined) {
			this._puhOptions.externalRuntime = true;
		}
		return this._pug.compileClient(source, this._pugOptions);
	}
}

module.exports = TemplateProvider;
