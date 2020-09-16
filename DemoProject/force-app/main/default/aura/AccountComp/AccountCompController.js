({
    doInit : function(component, event, helper) {
        helper.getProductRecord(component); // Calling Helper method
    },

    handleClick : function (component, event, helper) {
        helper.submitRecord(component,event);
    },
    
    openModal : function(component, event, helper) {
        //Dynamic creation of lightningModalChild component and appending its markup in a div
		$A.createComponent( 'c:leadCreation', {
                'headerText' : 'Create Lead'
            },
            function(modalComponent, status, errorMessage) {
                if (status === "SUCCESS") {
                    //Appending the newly created component in div
                    var body = component.find( 'showChildModal' ).get("v.body");
                    body.push(modalComponent);
                    component.find( 'showChildModal' ).set("v.body", body);
                } else if (status === "INCOMPLETE") {
                	console.log('Server issue or client is offline.');
                } else if (status === "ERROR") {
                	console.log('error');
                }
            }
        );
	}
})