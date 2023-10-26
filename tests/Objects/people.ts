import { Page, expect } from "@playwright/test";
export default class People {

    constructor (public page: Page){

    }

    async peoplePageLabels(){
       await this.page.locator(".pl-2");
       await this.page.waitForSelector(".pl-2")

    }

    async toastValidationPeoplePage(){
        await expect(this.page.getByText('User has been successfully added.', { exact: true })).toBeVisible();
     }

     async clickAdddropdown(){
        await this.page.click(".pl-2");
        await this.page.waitForSelector('//*[@id="add"]/div/p');
        await this.page.click('//*[@id="add"]/div/p');
     }

     async verifyuserInformationLabel(){
        await this.page.waitForSelector("//p[text()='User Information']");
     }

     async enterFirstName(firstname: string){
      await this.page.locator("(//input[@class='input_input-field__b2KSU'])[2]")
         .type(firstname);
        //await this.page.fill('//*[@id="__next"]/main/div/div[2]/div/div[3]/aside/div[2]/div[2]/div[2]/form/div[1]/div[1]/div[1]/div/div[2]/input', "testQA");
     }

     async enterLastName(lastname: string){
        await this.page.locator("(//input[@class='input_input-field__b2KSU'])[3]")
         .type(lastname)
     }

     async emailAddressPeople(emailPeople: string){
         await this.page.locator("(//p[text()='Email address']/following::input)[1]")
         .type(emailPeople)
       // await this.page.locator('//*[@id="__next"]/main/div/div[2]/div/div[3]/aside/div[2]/div[2]/div[2]/form/div[1]/div[2]/div[1]/div/div[2]/input').type(emailPeople)
     }

     async countryDropdown(){
      await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Select country').click();
        await this.page.getByText('Angola').click();
     }

     async groupDropdown(){
      //await this.page.waitForTimeout(2000);
        await this.page.getByPlaceholder('Select group').click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "aug 2 grp"}).click();
     }

     async jobProfileDropdown(){
      
        await this.page.getByPlaceholder('Select job profile').click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "1 Job Profile"}).click();
     }

     async languageDropdown(){
        await this.page.getByPlaceholder('Select language').click();
        await this.page.locator("#scroll-container").locator("p", {hasText: "Chinese"}).click();
     }

     async clickSaveButton(){
        await this.page.getByRole('button', { name: 'Save and Close' }).click();
     }

     async searchbar(search: string){
      await this.page.locator("//input[@placeholder='Search']")
      .type(search);

   }

      async view() {
         await this.page.locator("(//p[text()='View'])[1]").click()
      }

      async editUser(){
         await this.page.locator("(//p[contains(@class,'text-text01 text-2xl')])[2]")
      }

      async toastValidationEditPeoplePage(){
         await expect(this.page.getByText('User has been successfully edited.', { exact: true })).toBeVisible();
      }

      async deleteUser(){
         await this.page.locator("//p[text()='Delete User']").click();
         await this.page.locator("//p[text()='Yes, I am sure']").click();
         await this.page.waitForTimeout(5000);
      }

      async toastValidationDeletePeoplePage(){
         await expect(this.page.getByText('This user has been successfully deleted', { exact: true })).toBeVisible();
      }

      async filterGroupPeople(){
         await this.page.locator("//p[text()='filter']").click();
         await this.page.locator("(//p[text()='Group'])[1]").click();
         await this.page.locator("//input[@placeholder='Select Item']").fill('aug 2 grp');
      }

      async filterLanguagePeople(){
         await this.page.locator("//p[text()='filter']").click();
         await this.page.waitForTimeout(3000);
         await this.page.locator("(//p[text()='Language'])[1]").click();
         await this.page.locator("//input[@placeholder='Select Item']").fill('Czech');
         await this.page.locator("(//div[contains(@class,'px-6 cursor-pointer')]//div)[1]").click();
         await this.page.locator("(//div[@class='filter-tag_filter-tag-message__cT2MN']//p)[3]").waitFor();
      }



}