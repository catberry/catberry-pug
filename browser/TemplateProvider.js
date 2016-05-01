'use strict';

const pugRuntimeWrap = require('pug-runtime/wrap');

class TemplateProvider {

	/**
	 * Creates new instance of Pug template provider.
	 * @param {Locator} locator The service locator for resolving dependencies.
	 * @constructor
	 */
	constructor(locator) {
		const config = locator.resolve('config') || {};

		/**
		 * Current Pug factory.
		 * @type {Pug}
		 * @private
		 */
		this._pug = locator.resolve('pug');

		this._merge = this._pug.merge;

		/**
		 * Config for Pug
		 *
		 * @private
		 */
		this._pugOptions = config.pugOptions || {};

		/**
		 * Template provider globals
		 *
		 * @public
		 */
		this.globals = config.template && config.template.globals ? config.template.globals : {};

		/**
		 * Current set of registered templates.
		 * @type {Object}
		 * @private
		 */
		this._templates = Object.create(null);
	}

	/**
	 * Registers compiled (precompiled) Pug template.
	 * http://pugjs.com/reference.html
	 * @param {string} name Template name.
	 * @param {string} compiled Compiled template source.
	 */
	registerCompiled(name, compiled) {
		this._templates[name] = pugRuntimeWrap(compiled);
	}

	/**
	 * Renders template with specified data.
	 * @param {string} name Name of template.
	 * @param {Object} data Data context for template.
	 * @returns {Promise<string>} Promise for rendered HTML.
	 */
	render(name, data) {
		if (!(name in this._templates)) {
			return Promise.reject(new Error(`"${name}" not found among registered templates`));
		}
		let promise;
		try {

			/* Skip merge if globals doesn't exist */
			const mergedData = this.globals ? this._merge(this._merge({}, this.globals), data || {}) : data;
			promise = Promise.resolve(this._templates[name](mergedData));
		} catch (e) {
			promise = Promise.reject(e);
		}
		return promise;
	}
}

module.exports = TemplateProvider;
