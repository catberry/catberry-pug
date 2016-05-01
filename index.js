'use strict';

const Pug = require('./lib/pug.js');
const PugWrap = require('./lib/pug-wrap.js');
const TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('pug', Pug);
		locator.registerInstance('pug/wrap', PugWrap);
		locator.register('templateProvider', TemplateProvider, true);
	},
	Pug,
	PugWrap,
	TemplateProvider
};
