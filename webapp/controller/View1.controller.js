sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("zkanthavelu_uI5zkanthavelu_uI5.controller.View1", {
		onInit: function() {
			var otable = this.getView().byId("idstudenttable");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData([]);
			otable.setModel(oModel);
		},

		onsubmit: function(oEvent) {
			var oTab = this.getView().byId("idstudenttable").getModel().getProperty("/");
			var name = this.getView().byId("name").getValue();
			var std = this.getView().byId("std").getValue();
			var sec = this.getView().byId("sec").getValue();
			var addr = this.getView().byId("addr").getValue();
			var ph = this.getView().byId("ph").getValue();

			var arr = [{
				"name": name,
				"std": std,
				"sec": sec,
				"addr": addr,
				"ph": ph
			}];
			oTab.push(arr[0]);
			this.getView().byId("idstudenttable").getModel().setProperty("/", oTab);

		},
		onnext:function(evt){
		    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("view2");
		}

	});
});