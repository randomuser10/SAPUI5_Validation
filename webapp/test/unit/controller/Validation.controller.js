/*global QUnit*/

sap.ui.define([
	"apple/project1/controller/Validation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Validation Controller");

	QUnit.test("I should test the Validation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
