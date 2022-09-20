import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Previously to operate with relations we must create a couple of objects to create relations
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

  // Navigate to relations
  await page.locator('#linkRelations').click();
  await expect(page.locator('text=No relations, click on add to create a new one')).toBeVisible();

  // Fill the name and select two objects to create the relation
  await page.locator('#addRelationName').fill('A relation between computer and human objects');
  await page.selectOption('#addRelationObj1', {label: 'A computer object'});
  await page.selectOption('#addRelationObj2', {label: 'A human object'});
  await page.locator('#addRelationButton').click();

  // Check the list contains the new object
  await expect(page.locator('data-testid=row')).toHaveCount(1);
  await expect(page.locator('#row0 >> data-testid=row0-name')).toHaveText('A relation between computer and human objects')
  await expect(page.locator('#row0 >> data-testid=row0-obj1Name')).toHaveText('A computer object')
  await expect(page.locator('#row0 >> data-testid=row0-obj2Name')).toHaveText('A human object')
});

test('Edit a relation', async ({ page }) => {
  // Click on edit of the relation
  await page.locator('data-testid=EditIcon').click();
  // Change the name and save
  await page.locator('#editRelationName').fill('Another name for the relation');
  await page.locator('data-testid=CheckCircleIcon').click();
  // Check the name has changed
  await expect(page.locator('data-testid=row0-name')).toHaveText('Another name for the relation')
});

test('Delete a relation', async ({ page }) => {
  // Click on delete of the relation
  await page.locator('data-testid=DeleteIcon').click();
  //Confirm
  await page.locator('#acceptConfirmAction').click();
  // Check that the list now contains no relations
  await expect(page.locator('data-testid=row')).toHaveCount(0);
});

// Other possible tests (like the app, they can be expanded... time is the only limit!)
// -Edit and cancel
// -Edit other fields and check
// -Delete and cancel
// -Check storage