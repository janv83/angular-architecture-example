/**
 * MovieDB Namespace
 */
var MovieDB = new (function () {
	"use strict";

	this.Config = {
		templateUrl: 'app/views/'
	};

    this.App = angular.module('MovieDB', ['ngRoute']);
})();