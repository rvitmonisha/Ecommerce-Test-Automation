
import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly proceedButton: Locator;
    readonly placeOrderButton: Locator;
    readonly paymentButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.proceedButton = page.getByText(
            'Proceed To Checkout'
        );

        this.placeOrderButton = page.getByRole('link', {
            name: 'Place Order'
        });

        this.paymentButton = page.locator(
            '[data-qa="pay-button"]'
        );
    }

    async proceedToCheckout() {
        await this.proceedButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async enterPaymentDetails() {
        await this.page.locator('[data-qa="name-on-card"]')
            .fill('Test Customer');

        await this.page.locator('[data-qa="card-number"]')
            .fill('4111111111111111');

        await this.page.locator('[data-qa="cvc"]')
            .fill('123');

        await this.page.locator('[data-qa="expiry-month"]')
            .fill('12');

        await this.page.locator('[data-qa="expiry-year"]')
            .fill('2030');
    }

    async confirmPayment() {
        await this.paymentButton.click();
    }
}
