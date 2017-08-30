'use strict';

exports.decorateConfig = config => Object.assign({}, config, {
	css: `
		${config.css}

		._title {
			display: none !important;
		}
	`
});
