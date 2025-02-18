export async function surveillanceTest(page) {
//await page.locator("button", { hasText: "Surveillance" }).waitFor({ state: "visible", timeout: 70000 });
await page.locator("button", { hasText: /surveillance/i }).waitFor({ state: "visible", timeout: 70000 });


// Average Daily Volume
await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
//await page.getByRole('button', { name: 'Surveillance' }).click();
await page.getByRole('link', { name: 'Average Daily Volume' }).click();
await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
await page.locator('input[name="fromDate"]').fill('2020-01-01');
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Correspondent').click();
await page.getByRole('option', { name: 'SASS' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('.MuiSelect-root').first().click();
await page.getByRole('option', { name: 'Equity' }).click();
await page.getByLabel('Symbol').click();
await page.getByRole('textbox', { name: 'Symbol' }).fill('b');
await page.getByRole('option', { name: 'B Stat: A | Type: E | Cusp: 067806109 | Orig: 045825106 Dscr: BARNES GROUP INC' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

  // Cash - Short Sell
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Cash - Short Sell' }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Position').click();
  await page.getByRole('option', { name: 'Activity' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  // Concentration
  await page.getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Concentration', exact: true }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="settleDate"]').fill('');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Layering
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Layering' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="tradeDate"]').fill('');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Mini Manipulation
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Mini Manipulation' }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Odd Lot
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Odd Lot' }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('AAPL');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Parameter
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Parameter' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="report"]').click();
  await page.locator('input[name="report"]').fill('LAYERING');
  await page.locator('button').filter({ hasText: 'Search' }).click();  
  await page.locator('input[name="field"]').click();
  await page.locator('input[name="field"]').fill('Total Cancel Quantity');
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Spoofing
  await page.getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Spoofing' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="tradeDate"]').fill('');
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('option', { name: 'A Stat: A | Type: E | Cusp: 00846U101 | Orig: 00846U101 Dscr: AGILENT' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Trade Participation
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Trade Participation' }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
  await page.locator('input[name="fromDate"]').fill('2020-01-01');
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Undue Concentration
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Undue Concentration' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('input[name="tradeDate"]').fill('');
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();

  //Wash Sale
  await page.getByRole('banner').getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole('link', { name: 'Wash Sale' }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: 'visible' });
  await page.locator('input[name="fromDate"]').fill('2020-01-01');  
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.locator('.MuiSelect-root').first().click();
  await page.getByRole('option', { name: 'Equity' }).click();
  await page.getByLabel('Symbol').click();
  await page.getByRole('textbox', { name: 'Symbol' }).fill('aapl');
  await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByLabel('Correspondent').click();
  await page.getByRole('option', { name: 'SASS' }).click();
  await page.locator('button').filter({ hasText: 'Search' }).click();
  await page.getByTestId('MuiDataTableBodyCell-1-0').getByRole('button', { name: 'details' }).click();
}
