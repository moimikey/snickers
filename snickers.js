/*jslint browser: true, css: false, maxerr: 50, indent: 4 */
(function (window, console) {
	"use strict";

	var document = window.document, test = {
		init: function () {
			return this.say('bitch');
		},
		say: function (string) {
			return 'hello ' + string;
		},
		what: function () {
			console.log(document);
			console.log('smells like teen spirit up in here....');
			console.log(this.say('stupid whore…'));
		}
	};
	console.log(test.init());
	test.what();
}(window, console));