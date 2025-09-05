import { Page, Locator } from '@playwright/test';

export abstract class BasePage {

    public page: Page;
    
    // elements that are present on every page
    public signInHeaderButton: Locator;
    public searchInputField: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signInHeaderButton = this.page.locator('.login');
        this.searchInputField = this.page.locator('#search_query_top');
    }

    async show(url: string) {
        await this.page.goto(url);
    }

    async search(value: string) {
        await this.searchInputField.fill(value);
        await this.page.keyboard.press('Enter'); // the search icon has a smelly locator so I use the enter key to search
    }

}