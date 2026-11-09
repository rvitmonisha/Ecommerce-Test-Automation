
import { test, expect } from '@playwright/test';

test('Verify product quantity in shopping cart', async ({ page }) => {

    // Open first product directly
    await page.goto(
        'https://automationexercise.com/product_details/1'
    );

    // Verify product details page
    await expect(
        page.locator('.product-information')
    ).toBeVisible();

    // Set quantity to 4
    await page.locator('#quantity').fill('4');

    // Add product to cart
    await page.locator('button.cart').click();

    // Verify cart modal
    await expect(page.locator('#cartModal')).toBeVisible();

    // Open shopping cart
    await page.locator('#cartModal')
        .getByRole('link', { name: 'View Cart' })
        .click();

    // Verify quantity
    await expect(
        page.locator('.cart_quantity button')
    ).toHaveText('4');

});
