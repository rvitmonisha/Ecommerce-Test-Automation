# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration.spec.ts >> Complete new user registration
- Location: tests\registration.spec.ts:7:1

# Error details

```
Error: This email is already registered. Run the test again with a new email.
```

# Page snapshot

```yaml
- generic [active] [ref=f24e1]:
  - banner [ref=f24e2]:
    - generic [ref=f24e5]:
      - link [ref=f24e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f24e9]
      - list [ref=f24e12]:
        - listitem [ref=f24e13]:
          - link " Home" [ref=f24e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f24e15]: 
            - text: Home
        - listitem [ref=f24e16]:
          - link " Products" [ref=f24e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f24e18]: 
            - text: Products
        - listitem [ref=f24e19]:
          - link " Cart" [ref=f24e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f24e21]: 
            - text: Cart
        - listitem [ref=f24e22]:
          - link " Signup / Login" [ref=f24e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f24e24]: 
            - text: Signup / Login
        - listitem [ref=f24e25]:
          - link " Test Cases" [ref=f24e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f24e27]: 
            - text: Test Cases
        - listitem [ref=f24e28]:
          - link " API Testing" [ref=f24e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f24e30]: 
            - text: API Testing
        - listitem [ref=f24e31]:
          - link " Video Tutorials" [ref=f24e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f24e33]: 
            - text: Video Tutorials
        - listitem [ref=f24e34]:
          - link " Contact us" [ref=f24e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f24e36]: 
            - text: Contact us
  - generic [ref=f24e39]:
    - generic [ref=f24e41]:
      - heading "Login to your account" [level=2] [ref=f24e42]
      - generic [ref=f24e43]:
        - textbox "Email Address" [ref=f24e44]
        - textbox "Password" [ref=f24e45]
        - button "Login" [ref=f24e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f24e48]
    - generic [ref=f24e50]:
      - heading "New User Signup!" [level=2] [ref=f24e51]
      - generic [ref=f24e52]:
        - textbox "Name" [ref=f24e53]: Juanita Volkman
        - textbox "Email Address" [ref=f24e54]: kristie41@yahoo.com
        - paragraph [ref=f24e55]: Email Address already exist!
        - button "Signup" [ref=f24e56] [cursor=pointer]
  - contentinfo [ref=f24e57]:
    - generic [ref=f24e62]:
      - heading "Subscription" [level=2] [ref=f24e63]
      - generic [ref=f24e64]:
        - textbox "Your email address" [ref=f24e65]
        - button "" [ref=f24e66] [cursor=pointer]
        - paragraph [ref=f24e68]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f24e72]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { HomePage } from '../pages/HomePage';
  4  | import { RegistrationPage } from '../pages/RegistrationPage';
  5  | import { userData } from '../test-data/userData';
  6  | 
  7  | test('Complete new user registration', async ({ page }) => {
  8  | 
  9  |     const home = new HomePage(page);
  10 |     const registration = new RegistrationPage(page);
  11 | 
  12 |     await home.navigate();
  13 |     await registration.openSignup();
  14 | 
  15 |     await expect(page).toHaveURL(/login/);
  16 | 
  17 |     await registration.enterSignupDetails(
  18 |         userData.name,
  19 |         userData.email
  20 |     );
  21 | 
  22 |     // Wait for the response after signup
  23 |     await page.waitForLoadState('domcontentloaded');
  24 | 
  25 |     // Print current page details for debugging
  26 |     console.log('Current URL:', page.url());
  27 |     console.log('Page content:', (await page.locator('body').innerText()).slice(0, 2000));
  28 | 
  29 |     // Check for account information page
  30 |     const accountHeading = page.locator('h2').filter({
  31 |         hasText: /Enter Account Information/i
  32 |     });
  33 | 
  34 |     const duplicateEmail = page.getByText(
  35 |         /Email Address already exist/i
  36 |     );
  37 | 
  38 |     if (await duplicateEmail.isVisible().catch(() => false)) {
> 39 |         throw new Error('This email is already registered. Run the test again with a new email.');
     |               ^ Error: This email is already registered. Run the test again with a new email.
  40 |     }
  41 | 
  42 |     await expect(accountHeading).toBeVisible({ timeout: 15000 });
  43 | 
  44 |     await registration.fillAccountInformation(userData);
  45 |     await registration.createAccount();
  46 | 
  47 |     await expect(
  48 |         page.getByText('Account Created!', { exact: true })
  49 |     ).toBeVisible({ timeout: 15000 });
  50 | });
  51 | 
```