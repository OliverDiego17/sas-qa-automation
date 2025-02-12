//Balance Activity
await page.getByRole('link', { name: 'Balance Activity' }).click();
await page.locator('input[name="fromDate"]').fill('2020-01-01');
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Settle Date').click();
await page.getByRole('option', { name: 'Trade Date' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel("Correspondent").click();
await page.getByRole("option", { name: "SASS" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
const page1Promise = page.waitForEvent('popup');
await page.getByTestId('MuiDataTableBodyCell-1-0').getByLabel('details').click();
const page1 = await page1Promise;
await page1.goto('https://sasclearing.softwarealgo.com/app/trns/activity/?dateType=Trade%20Date&accountNo=0001&toDate=2025-02-11&fromDate=2020-01-01&origin=gl-report&symbolSelectField=symbol&searchType=Uncompress');
await page.getByLabel('Blank').click();
await page.getByRole('option', { name: 'Client' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Client').click();
await page.getByRole('option', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('GL').click();
await page.getByText('Blank').click();
await page.getByLabel('Trade Date').click();
await page.getByRole('option', { name: 'Settle Date' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Balance Snapshot
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Balance Snapshot' }).click();
await page.locator('input[name="fromDate"]').fill('2020-01-01');
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Settle Date').click();
await page.getByRole('option', { name: 'System Date' }).click();
await page.getByLabel("Correspondent").click();
await page.getByRole("option", { name: "SASS" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('System Date').click();
await page.getByRole('option', { name: 'Trade Date' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Trade Date').click();
await page.getByRole('option', { name: 'Trade and Settle' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Trade and Settle').click();
await page.getByRole('option', { name: 'Settle Date' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-type').click();
await page.getByRole('option', { name: 'Client' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-broker').click();
await page.getByRole('option', { name: 'Broker Dealer', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Broker Dealer').click();
await page.getByRole('option', { name: 'Non Broker Dealer - Customer' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Blank').click();
await page.getByRole('option', { name: 'BOD' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('BOD').click();
await page.getByRole('option', { name: 'SEG' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('SEG').click();
await page.getByText('Blank').click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Client').click();
await page.getByRole('option', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Balance Summary
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Balance Summary' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Settle Date').click();
await page.getByRole('option', { name: 'Trade Date' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel("Correspondent").click();
await page.getByRole("option", { name: "SASS" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-broker').click();
await page.getByRole('option', { name: 'Broker Dealer', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Broker Dealer').click();
await page.getByRole('option', { name: 'Non Broker Dealer - Customer' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Non Broker Dealer - Customer').click();
await page.locator('#mui-component-select-type').click();
await page.getByRole('option', { name: 'Client' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Client').click();
await page.getByRole('option', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Beta Balance Recon
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Beta Balance Recon' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('input[name="date"]').fill('');
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel("Correspondent").click();
await page.getByRole("option", { name: "SASS" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Currency Balance
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Currency Balance' }).click();
await page.locator('input[name="fromDate"]').fill('2020-01-01');
await page.getByLabel("Correspondent").click();
await page.getByRole("option", { name: "SASS" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByRole('button', { name: 'Clear' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-broker').click();
await page.getByRole('option', { name: 'Broker Dealer', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Broker Dealer').click();
await page.getByRole('option', { name: 'Non Broker Dealer - Customer' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Blank').click();
await page.getByRole('option', { name: 'Client' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Client').click();
await page.getByRole('option', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//GL
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('input[name="date"]').fill('');
await page.locator('button').filter({ hasText: 'Search' }).click();

//Payment Option
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Payment Option' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Active').click();
await page.getByRole('option', { name: 'Inactive' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Inactive').click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Correspondent').click();
await page.getByRole('option', { name: 'SASS' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator(".MuiGrid-root > div > div > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root").click();
await page.getByRole("option", { name: "Equity" }).click();
await page.getByLabel("Symbol").click();
await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
await page.getByRole("option", { name: "AAPL Stat: A | Type: E | Cusp" }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByRole('button', { name: 'Clear' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByRole('button', { name: 'Add New' }).click();
await page.getByLabel('Add New Payment Option').locator('#correspondent').click();
await page.getByRole('option', { name: 'SASS' }).click();
await page.getByLabel('Add New Payment Option').locator('#mui-component-select-entryType').click();
await page.getByRole('option', { name: 'Dividend' }).click();
await page.locator('input[name="fromDate"]').fill('2025-02-13');
await page.getByRole('textbox', { name: 'Symbol' }).click();
await page.getByRole('textbox', { name: 'Symbol' }).fill('AAPL');
await page.getByRole('option', { name: 'AAPL 280229 | 037833100 |' }).click();
await page.getByLabel('Add New Payment Option').locator('#mui-component-select-paymentOption').click();
await page.getByRole('option', { name: 'Reinvest' }).click();
await page.getByRole('button', { name: 'Save' }).click();
await page.getByLabel('Symbol').click();
await page.getByRole('textbox', { name: 'Symbol' }).fill('AAPL');
await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Trial Balance
await page.getByRole('button', { name: 'Balance' }).click();
await page.getByRole('link', { name: 'Trial Balance' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Trade and Settle').click();
await page.getByRole('option', { name: 'ATL Trade and Settle' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('ATL Trade and Settle').click();
await page.getByRole('option', { name: 'Trade and Settle', exact: true }).click();
await page.getByLabel('Correspondent').click();
await page.getByRole('option', { name: 'SASS' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-type').click();
await page.getByRole('option', { name: 'Client' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Client').click();
await page.getByRole('option', { name: 'GL' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('GL').click();
await page.getByRole('option', { name: 'Blank' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-sumUpBy').click();
await page.getByRole('option', { name: 'Account No', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-sumUpBy').click();
await page.getByRole('option', { name: 'Correspondent' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-sumUpBy').click();
await page.getByRole('option', { name: 'Blank' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();

//Unsecured Debit Balance
await page.getByRole('button', { name: 'Balance', exact: true }).click();
await page.getByRole('link', { name: 'Unsecured Debit Balance' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Correspondent').click();
await page.getByRole('option', { name: 'SASS' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Trade and Settle').click();
await page.getByRole('option', { name: 'ATL Trade and Settle' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('ATL Trade and Settle').click();
await page.getByRole('option', { name: 'Trade and Settle', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.locator('#mui-component-select-broker').click();
await page.getByRole('option', { name: 'Non Broker Dealer - Customer' }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
await page.getByLabel('Non Broker Dealer - Customer').click();
await page.getByRole('option', { name: 'Broker Dealer', exact: true }).click();
await page.locator('button').filter({ hasText: 'Search' }).click();
