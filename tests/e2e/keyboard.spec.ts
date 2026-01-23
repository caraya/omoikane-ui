import { test, expect } from '@playwright/test';

test('FormWizard keyboard navigation (tabs)', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-formwizard--playground');

  // Ensure Account tab is visible
  const tabAccount = page.locator('role=tab[name="Account"]');
  await expect(tabAccount).toBeVisible();

  // Focus and press ArrowRight to move to Profile
  await tabAccount.focus();
  await page.keyboard.press('ArrowRight');

  // Determine the Profile panel via the tab's aria-controls and assert its content
  const tabProfile = page.locator('role=tab[name="Profile"]');
  const profilePanelId = await tabProfile.getAttribute('aria-controls');
  if (profilePanelId) {
    const profilePanel = page.locator(`[id="${profilePanelId}"]`);
    await expect(profilePanel.locator('text=Bio')).toBeVisible();
  } else {
    // Fallback: assert the Profile tab is visible and the text exists somewhere
    await expect(tabProfile).toBeVisible();
    await expect(page.locator('text=Bio')).toBeVisible();
  }
});
