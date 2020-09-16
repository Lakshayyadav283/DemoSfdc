({
	saveFunction: function(component, event, helper) {
		var action = component.get("c.creatLeadRecord");
        action.setParams({"leadObj":component.get("v.leadObj")});
        action.setCallback(this,function(result){
            component.set("v.isShow",false);
            var leadId = result.getReturnValue();
            //alert('leadId'+leadId);
            helper.showToast(component, event, helper, 'success', 'Lead Generated Successfully', 'Success Message')
			component.destroy();            
        });
        $A.enqueueAction(action);
    },
    showToast : function(c, e, h, messageType, message, title) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : title,
            message: message, //'Mode is pester ,duration is 5sec and Message is not overrriden because messageTemplateData is not specified',
            messageTemplate: '',
            duration:' 10000',
            key: 'info_alt',
            type: messageType,
            mode: 'dismissible'
        });
        toastEvent.fire();
    }
})