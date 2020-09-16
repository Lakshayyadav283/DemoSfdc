public class AccountAuraClr
{
    @AuraEnabled
  	 public static List<Product__c> getProductRecord()
    {
        return new List<Product__c>([Select id,Name,Color__c,Points__c from Product__c]);
    }
    @AuraEnabled
    public static id saveProductRecord(){
        Product__c a = new Product__c(Name='Ross', Color__c ='Red', Points__c =11);
        insert a;
        return a.id;
    }
}