'use strict';

const Pug = require('./lib/pug.js');
const TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('pug', Pug);
		locator.register('templateProvider', TemplateProvider, true);
	},
	Pug,
	TemplateProvider
};
