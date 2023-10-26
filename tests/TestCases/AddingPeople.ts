import { expect, chromium, test } from "@playwright/test";
//import { test } from "@playwright/test";
import LoginPage from "../Objects/login"
import People from "../Objects/people";
//import People from "./Object/people"

//const emailAddress = "gerlie@old.st"
//const password = "Password11@"

test.describe("Page demo",async () => {
    test("Adding new People", async ({page}) =>{
        const login11 = new LoginPage(page);
        const peoplePage = new People(page);
        await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
        await login11.welcomeLabel();
        await login11.enterEmailAddress("gerlie@old.st");
        await page.waitForTimeout(2000);
        await login11.enterPassword("Password11@");
        await login11.loginButton();
        await peoplePage.peoplePageLabels();
        await peoplePage.clickAdddropdown();
        await peoplePage.verifyuserInformationLabel();
        await peoplePage.enterFirstName("TestAuto013");
        await peoplePage.enterLastName("data");
        await peoplePage.emailAddressPeople("testautomatio13@gmail.com");
        await peoplePage.countryDropdown();
        await page.waitForTimeout(2000);
        await peoplePage.groupDropdown();
        await peoplePage.jobProfileDropdown();
        await peoplePage.languageDropdown();
        await peoplePage.clickSaveButton();
        await page.waitForLoadState();
        await peoplePage.toastValidationPeoplePage();
    })

    test("Editing existing People", async ({page}) =>{
        const login11 = new LoginPage(page);
        const peoplePage = new People(page);
        await page.goto('http://admin-app-stg.eba-mjccpvfc.eu-central-1.elasticbeanstalk.com/auth/login');
        await login11.welcomeLabel();
        await login11.enterEmailAddress("gerlie@old.st");
        await page.waitForTimeout(2000);
        await login11.enterPassword("Password11@");
        await login11.loginButton();
        await peoplePage.peoplePageLabels();
        await peoplePage.searchbar("TestAuto012");
        await page.waitForLoadState();
        await peoplePage.view();
        await peoplePage.enterFirstName("TestAuto01r");
        await peoplePage.enterLastName("QAtest");
        await peoplePage.clickSaveButton();
        await peoplePage.toastValidationEditPeoplePage();
    })

    test("Deleting existing People", async ({page}) =>{
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
    test("Filter existing People", async ({page}) =>{
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

