import { test, expect } from '@playwright/test';
import * as pages from '@page-objects/index';

test.describe('search test suite', () => {

    let homePage: pages.HomePage;

    test.beforeEach(async ({ browser }) => {
        let context = await browser.newContext({});
        let page = await context.newPage();
        homePage = new pages.HomePage(page);
        homePage.show('/');
    });

    test('search for an existing product', async () => {
        await homePage.search('t-shirt');
        await expect(homePage.page.getByText('1 result has been found')).toBeVisible();
        // in a real life scenario I would have created a product through the API, searched for it and confirmed it returned after searching for it
    });
});