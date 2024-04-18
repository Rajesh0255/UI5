sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("fiori.controller.View1", {
            onInit: function () {

            },
            onClick: function (oEvent) {
                debugger
                const num1 = this.getView().byId("input1").getValue()
                const num2 = this.getView().byId("input2").getValue()
                let add = (+num1) + (+num2)
                alert(add)


            },
            oJson: function () {

                debugger;

                name: "ramesh";
                age: 56


            }
        
        });
    });
