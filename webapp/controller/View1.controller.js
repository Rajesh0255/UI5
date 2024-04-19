sap.ui.define([
    "sap/ui/core/mvc/Controller",

    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("fiori.controller.View1", {
            onInit: function () {
                const details = {
                    Emp:{
                    name:"ramesh",
                    age: 56
                    }
                }
                const PHONE = {
                    MOBILE:{
                    Phoneno:938137446,
                
                    }
                }
               const json  = new JSONModel(details);
               const json1  = new JSONModel(PHONE);
               this.getView().setModel(json);
               this.getView().setModel(json1,"JSON1");

            }
            
           

       
            
            


        
        });
    });
