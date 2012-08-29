/**
 * Snickers
 *
 * Hell if I know what I'm gonna turn this into...
 *
 * @author Michael Scott Hertzberg
 *
 */
;(function ($, window, undefined) {
	'use strict';
	var snickers = 'snickers',
		document = window.document,
		defaults = {
			alive: true
		};

	function Snickers(element, options) {
		this.element   = element;
		this.options   = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name     = snickers;
		this.init();
	}

	Snickers.prototype.init = function () {
		var a,
			b,
			c,
			d,
			e = this.element,
			o = this.options,
			i = -1,
			u = e.innerText;

		e.innerText = '';
		e.setAttribute('data-original', u);
		e.setAttribute('data-chars', u.length);
		e.setAttribute('data-words', u.split(/\s+/).length);

		while (++i < u.length) {
			a = document.createElement('div');
			b = document.createElement('div');
			c = e.appendChild(a);
			d = u.length === i + 1 ? e.appendChild(b) : []._;

			c.setAttribute('class', snickers);
			c.setAttribute('data-index', i);
			c.setAttribute('data-letter', '' === u[i].replace(/^\s+|\s+$/g, "") ? '_' : u[i]);

			c.innerHTML = '_' === c.dataset.letter ? '&nbsp;' : u[i];

			c.setAttribute('style');
			c.style.backgroundColor = '#FFF';
			c.style.float = 'left';
			c.style.marginLeft = c.dataset.letter === '_' ? '10px' : (0 === i ? 0 : '1px');

			if (d) {
				d.setAttribute('style');
				d.style.clear = 'both';
			}
		}
	};
	$.fn[snickers] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + snickers)) {
				$.data(this, 'plugin_' + snickers, new Snickers(this, options));
			}
		});
	};
}(jQuery, window));