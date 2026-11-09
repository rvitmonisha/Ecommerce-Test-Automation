
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { userData } from '../test-data/userData';

test('Complete checkout and place an order', async ({ page }) => {

    const home = new HomePage(page);
    const registration = new RegistrationPage(page);
    const checkout = new CheckoutPage(page);

    // 1. Open website
    await home.navigate();

    // 2. Register a new customer
    await registration.openSignup();

    await registration.enterSignupDetails(
        userData.name,
        userData.email
    );

    await registration.fillAccountInformation(userData);
    await registration.createAccount();

    // 3. Verify account creation
    await expect(
        page.getByText('Account Created!', { exact: true })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Continue' }).click();

    // 4. Verify logged-in customer
    await expect(
        page.getByText(`Logged in as ${userData.name}`)
    ).toBeVisible();

    // 5. Open a product directly
    await page.goto(
        'https://automationexercise.com/product_details/1'
    );

    // 6. Add product to cart
    await page.locator('button.cart').click();

    const modal = page.locator('#cartModal');

    await expect(modal).toBeVisible();

    // 7. Open cart
    await modal.getByRole('link', {
        name: 'View Cart'
    }).click();

    // 8. Verify cart contains a product
    await expect(
        page.locator('#cart_info_table tbody tr')
    ).toHaveCount(1);

    // 9. Proceed to checkout
    await checkout.proceedToCheckout();

    // 10. Verify checkout information
    await expect(
        page.getByRole('heading', { name: 'Address Details' })
    ).toBeVisible();

    await expect(
        page.getByRole('heading', { name: 'Review Your Order' })
    ).toBeVisible();

    // 11. Place order
    await checkout.placeOrder();

    // 12. Enter dummy payment details
    await checkout.enterPaymentDetails();

    // 13. Confirm payment
    await checkout.confirmPayment();

    // 14. Verify order confirmation
    await expect(
        page.getByText('Order Placed!', { exact: false })
    ).toBeVisible();

});
