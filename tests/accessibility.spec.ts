
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Check homepage accessibility', async ({ page }) => {
    await page.goto('https://automationexercise.com/');

    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

    const violations = results.violations;

    console.log('\n===== ACCESSIBILITY REPORT =====');
    console.log('Total violations:', violations.length);

    for (const violation of violations) {
        console.log(`Rule: ${violation.id}`);
        console.log(`Impact: ${violation.impact}`);
        console.log(`Affected elements: ${violation.nodes.length}`);
        console.log(`Description: ${violation.description}\n`);
    }

    await test.info().attach('accessibility-report.json', {
        body: JSON.stringify(violations, null, 2),
        contentType: 'application/json'
    });

    if (violations.length > 0) {
        throw new Error(
            `Accessibility scan found ${violations.length} violations. See accessibility-report.json in the test attachments.`
        );
    }

    expect(violations).toHaveLength(0);
});
