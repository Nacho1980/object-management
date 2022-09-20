import { test, expect } from '@playwright/test';

test('Landing page has no objects to search for but a link to the objects page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Check that there are no objects created
  const noObjectsWarnLoc = page.locator('text=No objects, to create a new one navigate to the');
  await expect(noObjectsWarnLoc).toBeVisible()

  // Check there is a link to the objects page
  const objectsNavLocator = page.locator('nav >> text=Objects');
  await expect(objectsNavLocator).toBeVisible()

  // Click the link to the objects page
  await objectsNavLocator.click();

  // Check the URL
  await expect(page).toHaveURL(/.*objects/);
  
});

test('Create objects in the objects page and then search for them in the landing page', async ({ page }) => {
  // From the landing/home page...
  await page.goto('http://localhost:3000/');
  
  // ...check there is a link to the objects page
  const objectsNavLocator = page.locator('nav >> text=Objects');
  await expect(objectsNavLocator).toBeVisible()

  // Click the link to the objects page
  await objectsNavLocator.click();

  // Check the URL
  await expect(page).toHaveURL(/.*objects/);

  // Create a new computer object, selecting type and filling name and description
  await page.selectOption('#addObjectType', 'computer');
  await page.locator('#addObjectName').fill('A computer object');
  await page.locator('#addObjectDescription').fill('First object in the list');
  await page.locator('#addObjectButton').click();

  // Create a new human object, selecting type and filling name and description
  await page.selectOption('#addObjectType', 'human');
  await page.locator('#addObjectName').fill('A human object');
  await page.locator('#addObjectDescription').fill('Second object in the list');
  await page.locator('#addObjectButton').click();

  // Before going back to the home page, check that both objects have been listed
  await expect(page.locator('data-testid=row')).toHaveCount(2);

  // Navigate back home
  await page.locator('#linkHome').click();
  await expect(page.locator('#autocomplete-search')).toBeVisible();

  // Search for the first object (computer)
  await page.locator('#autocomplete-search').fill('computer');
  //await page.keyboard.press('Enter');
  // Select option in the quicksearch result
  await page.locator('span[role="option"] >> text=A computer object').click();
  await expect(page.locator('#search-result')).toBeVisible();
  await expect(page.locator('data-testid=ComputerIcon')).toBeVisible();
  await expect(page.locator('text=A computer object')).toBeVisible();
  await expect(page.locator('text=First object in the list')).toBeVisible();

  // Search for the second object (human)
  await page.locator('#autocomplete-search').fill('human');
  // Select option in the quicksearch result
  await page.locator('span[role="option"] >> text=A human object').click();
  await expect(page.locator('#search-result')).toBeVisible();
  await expect(page.locator('data-testid=PersonIcon')).toBeVisible();
  await expect(page.locator('text=A human object')).toBeVisible();
  await expect(page.locator('text=Second object in the list')).toBeVisible();
});