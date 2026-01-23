import { test, expect } from '@playwright/test';

test('DataTable drag and drop updates subtitle and column', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datatable--playground');

  // Ensure initial cards present
  await expect(page.locator('text=Task A')).toBeVisible();

  const source = page.locator('text=Task A').first();
  // target: second column drop area (assume columns rendered left-to-right)
  const columns = page.locator('.bg-gray-50');
  const targetColumn = columns.nth(1);

  await source.dragTo(targetColumn);

  // After drop, Task A should be inside target column; verify subtitle text equals column title
  const colTitleInput = targetColumn.locator('input').first();
  const title = await colTitleInput.inputValue();

  // locate card container within target column
  const movedCard = targetColumn.locator('div:has-text("Task A")').first();
  await expect(movedCard).toBeVisible();
  // subtitle is rendered as a small span inside the DetailCell
  const subtitleEl = movedCard.locator(`span:has-text("${title}")`).first();
  await expect(subtitleEl).toBeVisible();
});
