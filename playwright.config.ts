
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    // Run tests sequentially for better stability
    fullyParallel: false,

    reporter: [
        ['list'],
        ['allure-playwright']
    ],

    use: {
        baseURL: process.env.BASE_URL || 'https://automationexercise.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ]
});
