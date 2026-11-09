
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Verify E-Commerce homepage and products page', async ({ page }) => {

    const home = new HomePage(page);

    // Open website
    await home.navigate();

    // Verify homepage
    await expect(home.homeHeading).toBeVisible();

    // Open products page directly
    await page.goto('https://automationexercise.com/products');

    // Verify products page URL
    await expect(page).toHaveURL(/products/);

    // Verify All Products heading
    await expect(
        page.locator('h2.title').filter({ hasText: 'All Products' })
    ).toBeVisible();

    // Verify products are displayed
    await expect(
        page.locator('.features_items .product-image-wrapper').first()
    ).toBeVisible();
});
