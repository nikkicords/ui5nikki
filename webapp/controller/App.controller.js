sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Dialog',
	'sap/m/MessageToast',
	'sap/m/Button',
	'sap/m/Text',
	'sap/ui/model/json/JSONModel',
	'sap/ui/model/resource/ResourceModel'

], function(Controller, Dialog, MessageToast, Button, Text, JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcampNikki2.controller.App", {
		
		onInit : function () {
			var oData = {
				field : {
					username : "Username"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcampNikki2.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},

		onLoginPress: function() {
			
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/field/username");
			var sMsg = oBundle.getText("helloMsg",[sRecipient]);
			MessageToast.show(sMsg);

			// var oUserName = this.getView().byId("username").getValue();
			// var oPassword = this.getView().byId("password").getValue();

			// var oUserNamee = "username";
			// var oPasswordd = "password";

			// if (oUserName === "" && oPassword === "") {
			// 	MessageToast.show("Username and Password are empty.");
			// } else if (!(oUserName.length >= 6 && oUserName.length <= 8)) {
			// 	MessageToast.show("Username must be 6 to 8 characters ONLY.");
			// } else if (!(oPassword.length >= 7 && oPassword.length <= 10)) {
			// 	MessageToast.show("Password must be 7 to 10 characters ONLY.");
			// } else if (oUserName === oUserNamee && oPassword === oPasswordd) {
			// 	MessageToast.show("Login Successfully.");
			// } else {
			// MessageToast.show("Invalid credentials.");
			// }

			// if (!(oPassword.length >= 7 && oPassword.length <= 10)) {
			// 	MessageToast.show("password must be 7-10 characters");
			// } else if (oUserName !== oUserName || oPassword !== oPassword) {
			// 	MessageToast.show("Wrong Credentials");
			// } else if (oUserName === "" || oPassword === "") {
			// 	MessageToast.show("username&password cannot be null");
			// } else if (!(oUserName.length >= 6 && oUserName.length <= 8)) {
			// 	MessageToast.show("username must be 6-8 characters");
			// }
			// else {MessageToast.show("Login Successful");}

			// var oTextField = this.getView().byId("username");
			// MessageToast.show("Hello World >>>" + oTextField.getValue());
			// sap.m.MessageToast.show("Hello World");

			// var dialog = new Dialog({
			// 	title: 'Confirm',
			// 	type: 'Message',
			// 	content: new Text({ text: 'Are you sure you want to login' }),
			// 	beginButton: new Button({
			// 		text: 'Submit',
			// 		press: function () {
			// 			MessageToast.show('Congrats!');
			// 			dialog.close();
			// 		}
			// 	}),
			// 	endButton: new Button({
			// 		text: 'Cancel',
			// 		press: function () {
			// 			dialog.close();
			// 		}
			// 	}),
			// 	afterClose: function() {
			// 		dialog.destroy();
			// 	}
			// });

			// dialog.open();

		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcampNikki2.view.App
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcampNikki2.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcampNikki2.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcampNikki2.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});