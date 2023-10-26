import { Page, expect } from "@playwright/test";
export default class LoginPage{

    constructor (public page: Page){

    }
    async welcomeLabel(){
        //this.page.locator("//p[text()='Welcome!']").();
        expect(this.page.getByText('Welcome!')).toBeVisible();

    }
    async enterEmailAddress(emailAddress: string){
        await this.page.locator("//input[@type='email']")
           .type(emailAddress);
          //await this.page.fill('//*[@id="__next"]/main/div/div[2]/div/div[3]/aside/div[2]/div[2]/div[2]/form/div[1]/div[1]/div[1]/div/div[2]/input', "testQA");
         await this.page.getByPlaceholder('Email Address').click();
         await this.page.getByPlaceholder('Email Address').fill('test@gmail.com');
         
       }

    async enterPassword(password: string){
        this.page.locator("input[type='password']")
        .type(password);
     }

     async loginButton(){
        this.page.waitForTimeout(2000);
        this.page.click("button[type='submit']");
     }


}