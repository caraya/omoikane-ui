import { test, expect } from '@playwright/test';

test('FormWizard end-to-end flow', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-formwizard--playground');

  // Step 0: try Next to show validation
  await page.click('text=Next');
  await expect(page.locator('[role="status"]')).toContainText('Username is required');

  // Fill account: first two inputs on the page
  const inputs = page.locator('input');
  await expect(inputs.first()).toBeVisible();
  await inputs.nth(0).fill('playwright-user');
  await inputs.nth(1).fill('pw@example.com');
  await page.click('text=Next');

  // Fill profile
  await page.fill('textarea', 'E2E bio');
  // fill address (last input)
  const afterInputs = await page.locator('input').all();
  if (afterInputs.length) {
    await afterInputs[afterInputs.length - 1].fill('789 E2E Ave');
  }

  await page.click('text=Next');
  await page.click('text=Submit');

  await expect(page.locator('[role="status"]')).toContainText('Form submitted successfully');
});
