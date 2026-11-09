
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { userDataSet } from '../test-data/userData';

for (const [index, user] of userDataSet.entries()) {

    test(`Complete new user registration - User ${index + 1}`, async ({ page }) => {

        const home = new HomePage(page);
        const registration = new RegistrationPage(page);

        // Step 1: Open website
        await home.navigate();

        // Step 2: Open signup page
        await registration.openSignup();

        await expect(page).toHaveURL(/login/);

        // Step 3: Enter signup details
        await registration.enterSignupDetails(
            user.name,
            user.email
        );

        // Step 4: Verify account information page
        await expect(
            page.locator('h2').filter({
                hasText: /Enter Account Information/i
            })
        ).toBeVisible({ timeout: 15000 });

        // Step 5: Fill account details
        await registration.fillAccountInformation(user);

        // Step 6: Create account
        await registration.createAccount();

        // Step 7: Verify successful registration
        await expect(
            page.getByText('Account Created!', { exact: true })
        ).toBeVisible({ timeout: 15000 });

    });

}
