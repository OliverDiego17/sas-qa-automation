
export async function surveillanceTest(page) {
await page.locator("button", { hasText: "Surveillance" }).waitFor({ state: "visible", timeout: 70000 });

// Average Daily Volume
 await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Average Daily Volume' }).click();
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  // Cash - Short Sell
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Cash - Short Sell' }).click();
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();  
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Position').click();
  await page.getByRole('option', { name: 'Activity' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  // Concentration
  await page.getByRole('banner', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Concentration', exact: true }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="settleDate"]').fill('');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
}
