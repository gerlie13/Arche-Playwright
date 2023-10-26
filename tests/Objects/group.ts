import { Page, expect } from "@playwright/test";
export default class Group {

    constructor (public page: Page){

    }

    async groupPageLabels(){
       await this.page.locator("(//p[text()='Groups'])[2]");
       await this.page.waitForSelector("(//p[text()='Groups'])[2]")

    }

    async toastValidationGroupPage(){
        await expect(this.page.getByText('The group has been successfully added.', { exact: true })).toBeVisible();
     }

     async groupMenu(){
        await this.page.locator("//p[text()='Groups']").click();
     }

     async groupLabel(){
        await this.page.locator("(//p[text()='Groups'])[2]").waitFor

     }

     async groupInfoLabel(){
        await this.page.locator("//p[text()='Group Information']").waitFor
     }

     async clickOnADD(){
        await this.page.locator("//p[text()='Add Group']").click();
     }

     async groupName(groupname: string){
        await this.page.locator("(//p[text()='Group Name']/following::input)[1]").click()
        await this.page.locator("(//p[text()='Group Name']/following::input)[1]")
        .type(groupname)
     }

     async groupLineManager(){
        await this.page.locator("//input[@placeholder='Select Line Manager']").click();
        //await this.page.locator("//input[@placeholder='Select Line Manager']").type(lineManager)
        await this.page.locator("#scroll-container").locator("p", {hasText: "Gerlie QA"}).click();
     }

     async groupCountry(){
        await this.page.waitForTimeout(2000);
        await this.page.locator("//input[@placeholder='Select country']").click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "Angola"}).click();
     }

     async groupRegion(){
        await this.page.locator("//input[@placeholder='Select region']").click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "EMEA"}).click();
     }

     async groupDepartment(){
        await this.page.locator("//input[@placeholder='Select department']").click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "Dpt24"}).click();
     }

     async clickSaveandClose(){
        await this.page.locator("//p[text()='Save and Close']").click();
     }

     async clickSearchbar(searchData: string){
        await this.page.locator("//input[@placeholder='Search groups']").click();
        await this.page.locator("//input[@placeholder='Search groups']").type(searchData);
     }

     async viewButton(){
        await this.page.locator("(//p[text()='View'])[1]").click();
     }

}