
import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartRows: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartLink = page.getByRole('link', {
            name: 'Cart'
        });

        this.cartRows = page.locator(
            '#cart_info_table tbody tr'
        );

        this.emptyCartMessage = page.getByText(
            'Cart is empty! Click here to buy products.'
        );
    }

    async openCart() {
        await this.cartLink.click();
    }

    async getProductCount() {
        return await this.cartRows.count();
    }

    async removeProduct(index: number) {
        await this.cartRows
            .nth(index)
            .locator('.cart_delete a')
            .click();
    }
}
