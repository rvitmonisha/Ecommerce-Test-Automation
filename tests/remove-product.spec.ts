
import { test, expect } from '@playwright/test';

test('Verify product removal from shopping cart', async ({ page }) => {

    // Open product details directly
    await page.goto(
        'https://automationexercise.com/product_details/1'
    );

    await expect(
        page.locator('.product-information')
    ).toBeVisible();

    // Add product to cart
    await page.locator('button.cart').click();

    // Open shopping cart
    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible();

    await modal.getByRole('link', {
        name: 'View Cart'
    }).click();

    // Verify product exists
    const cartRows = page.locator('#cart_info_table tbody tr');

    await expect(cartRows).toHaveCount(1);

    // Remove product
    await cartRows.first()
        .locator('.cart_delete a')
        .click();

    // Verify cart is empty
    await expect(cartRows).toHaveCount(0);

    await expect(
        page.getByText(/Cart is empty/i)
    ).toBeVisible();

});
