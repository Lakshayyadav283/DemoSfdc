({
    save : function(component, event, helper) {
        helper.saveFunction(component, event, helper);       
    },
    closeModal : function(component, event, helper) {
		// when a component is dynamically created in lightning, we use destroy() method to destroy it.
		component.destroy();
	},
})