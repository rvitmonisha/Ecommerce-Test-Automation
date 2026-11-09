
import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly productsLink: Locator;
    readonly homeHeading: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productsLink = page.getByRole('link', {
            name: 'Products'
        });

        this.homeHeading = page.getByRole('heading', {
            name: /Full-Fledged practice website for Automation Engineers/i
        });
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/');
    }

    async openProducts() {
        await this.productsLink.click();
    }
}
