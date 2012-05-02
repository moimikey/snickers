/**
 * snickers.js
 *
 * I'm not sure what this does yet, but you always need to start small to
 * improve.
 *
 * Copyright © 2012 Michael Scott Hertzberg (moimikey)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the “Software”),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * $v: 0.1
 * $a: moimikey
 * $y: 2012
 * $u: http://www.hertzberg.co
 *
 * jslint browser: true, css: false, maxerr: 50, indent: 4, predef: console, jQuery, navigator, window
 *
 */
(function (x, $) {
	"use strict";

	/**
	 * Setup variables
	 *
	 * @type {Object}
	 */
	var snickers = x.snickers || {};

	snickers.info = function () {

	};

	/**
	 * Get browser information
	 *
	 * @return {Object}
	 */
	snickers.browser = function () {
		var errorLog = {
			browserEngine: navigator.product,
			browserAgent: navigator.userAgent,
			browserCookies: navigator.cookieEnabled,
			browserArch: navigator.platform,
			language: navigator.language,
			urlCurrent: window.location.href,
			urlCurrentHash: window.location.hash,
			urlQuery: window.location.search,
			urlCurrentHost: window.location.hostname,
			urlReferer: window.document.referrer,
			urlTitle: window.document.title
		};

		return errorLog;
	};

	snickers.map = function () {

	};

	snickers.markers = function () {

	};

	snickers.data = function () {
		$(function () {
			var zipcode = $('input.zipcode');

			if ($(zipcode).val().match(/[\d\.\d\.\d\.\d]/)) {
				$.ajax({
					url: 'http://freegeoip.net/json/' + $(zipcode).val() + '?callback=?',
					dataType: 'jsonp',
					crossDomain: true,
					success: function (data) {
						if (data) {
							console.log(data);
						}
					}
				});
			} else {
				$(zipcode).css({
					boxShadow: 'inset 0 0 10px 0 red'
				});
				return false;
			}
		});
	};

	/**
	 * Event bindings
	 *
	 */
	snickers.binds = function () {
		$(function () {
			var keyCode;

			$('input.zipcode').on('keypress', function (e) {
				keyCode = e.keyCode || e.which;

				if (13 === keyCode) {
					snickers.data();
				}
			});
		});
	};

	/**
	 * Initialize methods
	 *
	 * @type {*}
	 */
	snickers.init = (function () {
		snickers.binds();
	}());

}(window, jQuery));