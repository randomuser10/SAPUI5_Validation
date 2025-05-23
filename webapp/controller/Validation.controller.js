sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("apple.project1.controller.Validation", {
        onInit() {
        },
        onSubmit(){
            // checking the mandatory field
            var emp = this.getView().byId("idIpEmpId").getValue();
            var regExp = /^[a-z A-Z 0-9]+$/
            if (emp === "") {
                this.getView().byId("idIpEmpId").setValueState("Error");
                this.getView().byId("idIpEmpId").setValueStateText("Employee ID is mandatory please fill it");
                
            }else{
                var emp_len = emp.length;
                this.getView().byId("idIpEmpId").setValueState("None");
            }
        }
    });
});