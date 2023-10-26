import { expect, chromium, test } from "@playwright/test";
//import { test } from "@playwright/test";
import LoginPage from "../Objects/login"
import People from "../Objects/people";
import Group from "../Objects/group"

test.describe("Group Module",async () => {
   test("Adding new Group", async ({page}) =>{
       const login11 = new LoginPage(page);
       const groupPage = new Group(page);
       await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
       await login11.welcomeLabel();
       await login11.enterEmailAddress("gerlie@old.st");
       await page.waitForTimeout(2000);
       await login11.enterPassword("Password11@");
       await login11.loginButton();
       await groupPage.groupMenu();
       await groupPage.groupLabel();
       await groupPage.clickOnADD();
       await groupPage.groupInfoLabel();
       await groupPage.groupName("test group 02");
       await groupPage.groupLineManager();
       await groupPage.groupCountry();
       await groupPage.groupRegion();
       await groupPage.groupDepartment();
       await groupPage.clickSaveandClose();
       await groupPage.toastValidationGroupPage();

   })

   test("Editing existing Group", async ({page}) =>{
      const login11 = new LoginPage(page);
      const groupPage = new Group(page);
      await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
      await login11.welcomeLabel();
      await login11.enterEmailAddress("gerlie@old.st");
      await page.waitForTimeout(2000);
      await login11.enterPassword("Password11@");
      await login11.loginButton();
      await groupPage.groupMenu();
      await groupPage.groupLabel();
      await groupPage.clickSearchbar("test group 02");
      await groupPage.viewButton();
      await groupPage.groupInfoLabel();
      await groupPage.groupName("test group2 02");

   })

   test("Deleting existing Group", async ({page}) =>{
       const login11 = new LoginPage(page);
       const peoplePage = new People(page);
       await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
       await login11.welcomeLabel();
       await login11.enterEmailAddress("gerlie@old.st");
       await page.waitForTimeout(2000);
       await login11.enterPassword("Password11@");
       await login11.loginButton();
       await peoplePage.peoplePageLabels();
       await peoplePage.searchbar("TestAuto013");
       await page.waitForLoadState();
       await peoplePage.view();
       await peoplePage.deleteUser();
       await peoplePage.toastValidationDeletePeoplePage();
   })
   test("Filter existing Group", async ({page}) =>{
       const login11 = new LoginPage(page);
       const peoplePage = new People(page);
       await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
       await login11.welcomeLabel();
       await login11.enterEmailAddress("gerlie@old.st");
       await page.waitForTimeout(2000);
       await login11.enterPassword("Password11@");
       await login11.loginButton();
       await peoplePage.peoplePageLabels();
       await peoplePage.filterLanguagePeople();
   })
})

