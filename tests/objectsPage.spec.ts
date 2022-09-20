import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Check there is a link to the objects page
  const objectsNavLocator = page.locator('nav >> text=Objects');
  await expect(objectsNavLocator).toBeVisible()

  // Click the link to the objects page
  await objectsNavLocator.click();

  // Check the URL
  await expect(page).toHaveURL(/.*objects/);
  await expect(page.locator('text=No objects, click on add to create a new one')).toBeVisible();
  
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

  // Check the list contains both objects
  await expect(page.locator('data-testid=row')).toHaveCount(2);
  await expect(page.locator('#row0 >> data-testid=row0-icon >> data-testid=ComputerIcon')).toBeVisible()
  await expect(page.locator('#row0 >> data-testid=row0-name')).toHaveText('A computer object')
  await expect(page.locator('#row0 >> data-testid=row0-description')).toHaveText('First object in the list')

  await expect(page.locator('#row1 >> data-testid=row1-icon >> data-testid=PersonIcon')).toBeVisible()
  await expect(page.locator('#row1 >> data-testid=row1-name')).toHaveText('A human object')
  await expect(page.locator('#row1 >> data-testid=row1-description')).toHaveText('Second object in the list')
});

test('Edit an object', async ({ page }) => {
  // Click on edit of second object
  await page.locator('#row1 >> data-testid=EditIcon').click();
  // Change the name and save
  await page.locator('#editObjectName').fill('Another name for the second object');
  await page.locator('data-testid=CheckCircleIcon').click();
  // Check the name has changed
  await expect(page.locator('#row1 >> data-testid=row1-name')).toHaveText('Another name for the second object')
});

test('Delete an object', async ({ page }) => {
  // Click on delete of second object
  await page.locator('#row1 >> data-testid=DeleteIcon').click();
  //Confirm
  await page.locator('#acceptConfirmAction').click();
  // Check that the list now only contains one object which is the first one that was added
  await expect(page.locator('data-testid=row')).toHaveCount(1);
  await expect(page.locator('#row0 >> data-testid=row0-icon >> data-testid=ComputerIcon')).toBeVisible()
  await expect(page.locator('#row0 >> data-testid=row0-name')).toHaveText('A computer object')
  await expect(page.locator('#row0 >> data-testid=row0-description')).toHaveText('First object in the list')
});

// Other possible tests (like the app, they can be expanded... time is the only limit!)
// -Edit and cancel
// -Edit other fields and check
// -Delete and cancel
// -Cascade delete: when deleting an object, any relation that uses it gets deleted as well