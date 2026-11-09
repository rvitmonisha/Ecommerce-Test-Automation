
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Add two products and verify shopping cart', async ({ page }) => {

    const cart = new CartPage(page);
    const modal = page.locator('#cartModal');

    // Add first product
    await page.goto('https://automationexercise.com/product_details/1');

    await expect(page.locator('.product-information')).toBeVisible();

    await page.locator('button.cart').click();

    await expect(modal).toBeVisible();

    // Continue shopping
    await modal.getByRole('button', {
        name: 'Continue Shopping'
    }).click();

    // Add second product
    await page.goto('https://automationexercise.com/product_details/2');

    await expect(page.locator('.product-information')).toBeVisible();

    await page.locator('button.cart').click();

    await expect(modal).toBeVisible();

    // View cart
    await modal.getByRole('link', {
        name: 'View Cart'
    }).click();

    // Verify cart URL
    await expect(page).toHaveURL(/view_cart/);

    // Verify two products
    await expect(cart.cartRows).toHaveCount(2);

    // Verify product details
    for (const row of await cart.cartRows.all()) {

        await expect(row.locator('.cart_description h4 a'))
            .toBeVisible();

        await expect(row.locator('.cart_price p'))
            .toBeVisible();

        await expect(row.locator('.cart_quantity button'))
            .toHaveText('1');

        await expect(row.locator('.cart_total p'))
            .toBeVisible();
    }
});
