'use strict';

exports.decorateConfig = config => Object.assign({}, config, {
	css: `
		${config.css}

		.tabs_title {
			display: none !important;
		}
	`
});
