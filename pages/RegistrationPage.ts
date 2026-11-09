
import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly signupLogin: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLogin = page.getByRole('link', {
            name: 'Signup / Login'
        });

        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator(
            'form[action="/signup"] input[name="email"]'
        );

        this.signupButton = page.getByRole('button', {
            name: 'Signup'
        });
    }

    async openSignup() {
        await this.signupLogin.click();
    }

    async enterSignupDetails(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }

    async fillAccountInformation(user: {
        firstName: string;
        lastName: string;
        password: string;
        address: string;
        city: string;
        state: string;
        zipcode: string;
        mobile: string;
    }) {
        // Select title
        await this.page.locator('#id_gender1').check();

        // Account details
        await this.page.locator('#password').fill(user.password);

        // Date of birth
        await this.page.locator('#days').selectOption('15');
        await this.page.locator('#months').selectOption('5');
        await this.page.locator('#years').selectOption('2000');

        // Newsletter options
        await this.page.locator('#newsletter').check();
        await this.page.locator('#optin').check();

        // Address information
        await this.page.locator('#first_name').fill(user.firstName);
        await this.page.locator('#last_name').fill(user.lastName);
        await this.page.locator('#address1').fill(user.address);
        await this.page.locator('#country').selectOption({
            label: 'India'
        });
        await this.page.locator('#state').fill(user.state);
        await this.page.locator('#city').fill(user.city);
        await this.page.locator('#zipcode').fill(user.zipcode);
        await this.page.locator('#mobile_number').fill(user.mobile);
    }

    async createAccount() {
        await this.page.locator(
            '[data-qa="create-account"]'
        ).click();
    }
}
