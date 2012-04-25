/**
 * snickers.js
 *
 * I'm not sure what this does yet, but you
 * always need to start small to improve.
 *
 * (c) 2012 moimikey
 *
 * jslint browser: true, css: false, maxerr: 50, indent: 4, predef: jQuery, $
 */
var snickers = (function ($) {
	"use strict";

	return {
		init: $(function () {
			$('body').html('<div class="snickers">OMG!!!</div>');
		})
	};
}(jQuery));