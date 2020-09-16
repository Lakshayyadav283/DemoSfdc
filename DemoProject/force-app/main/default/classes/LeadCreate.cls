public class LeadCreate {
    @auraenabled
    public static Id creatLeadRecord(Lead leadObj){
        lead leadIns = new lead();
        leadIns.FirstName = leadObj.FirstName;
        leadIns.LastName = leadObj.LastName;
        leadIns.Company = leadObj.Company;
        leadIns.Email = leadObj.Email;
		leadIns.RecordTypeId= Schema.SObjectType.Lead.getRecordTypeInfosByName().get('General').getRecordTypeId();
        leadIns.Status = 'New - Not Contacted';
        insert leadIns;
        return leadIns.id;
    }
}