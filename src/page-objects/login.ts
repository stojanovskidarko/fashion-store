import { Locator, Page } from '@playwright/test';
import { BasePage } from './base';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    public emailInputField: Locator = this.page.locator('#email');

    public passwordInputField: Locator = this.page.locator('#passwd');

    public signInButton: Locator = this.page.locator('#SubmitLogin');

    async login(email: string, password: string) {
        await this.emailInputField.fill(email);
        await this.passwordInputField.fill(password);
        await this.signInButton.click();
    }
}