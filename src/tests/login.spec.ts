import { test, expect } from '@playwright/test';
import * as pages from '@page-objects/index';

test.describe('login test suite', () => {

    let loginPage: pages.LoginPage;

    test.beforeEach(async ({ browser }) => {
        let context = await browser.newContext({});
        let page = await context.newPage();
        loginPage = new pages.LoginPage(page);
        loginPage.show('/');
        await loginPage.signInHeaderButton.click();
    });

    test('login with a valid user', async () => {
        await loginPage.login('ilovetesting999@gmail.com', 'test123'); // credentials wouldn't be hardcoded in a real life scenario
        await expect(loginPage.page.getByText('MY PERSONAL INFORMATION')).toBeVisible();
    });
});