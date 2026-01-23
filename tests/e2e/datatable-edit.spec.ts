import { test, expect } from '@playwright/test';

test('DataTable edit/save card title and body', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datatable--playground');

  // Find a card and double-click to edit
  const card = page.locator('div:has-text("Task A")').first();
  await expect(card).toBeVisible();
  await card.dblclick();

  // Editor should show an input (title) and a textarea (body)
  const editorBody = page.locator('textarea[placeholder="Card body"]').first();
  await expect(editorBody).toBeVisible();
  // The title input is the nearest input preceding the textarea in the DOM
  const editorTitle = page.locator('xpath=//textarea[@placeholder="Card body"]/preceding::input[1]');
  await expect(editorTitle).toBeVisible();

  // Fill new values and save
  await editorTitle.fill('Task A (edited)');
  await editorBody.fill('Updated body from E2E');
  await page.locator('button:has-text("Save")').first().click();

  // Wait for editor to disappear (save completed)
  await expect(page.locator('textarea[placeholder="Card body"]')).toHaveCount(0);

  // After save, new title and body should be visible
  await expect(page.locator('text=Task A (edited)')).toBeVisible();
  await expect(page.locator('text=Updated body from E2E')).toBeVisible();
});
