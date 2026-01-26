import { test, expect } from '@playwright/test';

test('homepage loads and displays content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Check if the page title is present
  await expect(page).toHaveTitle(/Digambar Portfolio/);

  // Check if main content is visible
  await expect(page.locator('h1')).toBeVisible();

  // Check navigation links
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('a[href="/about"]')).toBeVisible();
  await expect(page.locator('a[href="/projects"]')).toBeVisible();
  await expect(page.locator('a[href="/contact"]')).toBeVisible();
});

test('navigation to about page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('a[href="/about"]').click();
  await expect(page).toHaveURL(/.*\/about/);
  await expect(page.locator('h1')).toContainText('About');
});

test('navigation to projects page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('a[href="/projects"]').click();
  await expect(page).toHaveURL(/.*\/projects/);
  await expect(page.locator('h1')).toContainText('Projects');
});

test('navigation to contact page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('a[href="/contact"]').click();
  await expect(page).toHaveURL(/.*\/contact/);
  await expect(page.locator('h1')).toContainText('Contact');
});
