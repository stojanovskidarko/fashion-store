import { Locator, Page } from '@playwright/test';
import { BasePage } from './base';

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public popularButton: Locator = this.page.getByText('Popular')

}