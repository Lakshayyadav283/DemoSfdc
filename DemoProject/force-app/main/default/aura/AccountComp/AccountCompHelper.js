({
    getProductRecord : function( component ) {
        var action = component.get("c.getProductRecord"); //Calling Apex class controller 'getAccountRecord' method
        
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.accLst", response.getReturnValue());  // Adding values in Aura attribute variable.   
        });
        $A.enqueueAction(action);
    },
    submitRecord : function( component, event) {
        var action = component.get("c.saveProductRecord"); //Calling Apex class controller 'getAccountRecord' method
        
        action.setCallback(this, function(response) {
            var state = response.getState(); //Checking response status
            var result = JSON.stringify(response.getReturnValue());
            if (component.isValid() && state === "SUCCESS")
                component.set("v.accId", response.getReturnValue());
            alert("You clicked: " + response.getReturnValue());
            $A.get('e.force:refreshView').fire();
        });
        $A.enqueueAction(action);
    }
})