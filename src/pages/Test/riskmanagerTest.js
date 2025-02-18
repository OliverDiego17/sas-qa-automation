export async function riskmanagerTest(page) {

    await page.locator("button", { hasText: "Compliance" }).waitFor({ state: "visible", timeout: 70000 });
    
    //Buying Power
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Buying Power' }).click();
    await page.locator('input[name="fromDate"]').fill('2020-01-01');
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Correspondent').click();
    await page.getByRole('option', { name: 'SASS' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    //await page.getByRole('button', { name: 'Rerun Buying Power' }).click();
    //await page.getByLabel('Rerun', { exact: true }).check();
    //await page.getByRole('button', { name: 'Process' }).click();
    await page.getByTestId('headcol-4').click();
    await page.getByTestId('headcol-4').click();
    
    //Call Logs
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Call Logs' }).click();
    await page.locator('input[name="fromDate"]').fill('2020-01-01');
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Correspondent').click();
    await page.getByRole('option', { name: 'SASS' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByRole('checkbox', { name: 'Open' }).check();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Pending').click();
    await page.getByRole('option', { name: 'Overdue' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Overdue').click();
    await page.getByRole('option', { name: 'Satisfied' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Satisfied').click();       
    await page.getByRole('option', { name: 'Blank' }).click();
    await page.locator('#mui-component-select-callStatusReason').click();
    await page.getByRole('option', { name: 'ACH/Wire Received' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('ACH/Wire Received').click();
    await page.getByRole('option', { name: 'ACH/Wire Initiated' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('ACH/Wire Initiated').click();
    await page.getByRole('option', { name: 'Auto Satisfy' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Auto Satisfy').click();
    await page.getByRole('option', { name: 'Call Error' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Call Error').click();
    await page.getByRole('option', { name: 'Liquidated' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Liquidated').click();
    await page.getByRole('option', { name: 'PDT Attestation Received' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('PDT Attestation Received').click();
    await page.getByRole('option', { name: 'Blank' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    
    //Cash Call Log
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Cash Call Log' }).click();
    await page.locator('input[name="fromDate"]').fill('2020-01-01');
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Blank').click();
    await page.getByRole('option', { name: 'Close' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Close').click();
    await page.getByRole('option', { name: 'Extended' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Extended').click();
    //await page.getByRole('option', { name: 'Free Riding' }).click();
    //await page.locator('button').filter({ hasText: 'Search' }).click();
    //await page.getByLabel('Free Riding').click();
    await page.getByRole('option', { name: 'Outstanding' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Outstanding').click();
    await page.getByRole('option', { name: 'Pending' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    
    
    //Margin Requirement
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Margin Requirement' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Correspondent').click();
    await page.getByRole('option', { name: 'SASS' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.locator('input[name="tradeDate"]').fill('');
    await page.locator('button').filter({ hasText: 'Search' }).click();
    
    //Option Combo Strategy
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Option Combo Strategy' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Correspondent').click();
    await page.getByRole('option', { name: 'SASS' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.locator('.MuiSelect-root').first().click();
    await page.getByRole('option', { name: 'Option' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Margin Type').click();
    await page.getByRole('option', { name: 'Cash' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Margin Type').click();
    //await page.getByRole('option', { name: 'CPM' }).click();
    //await page.getByLabel('Margin Type').click();
    await page.getByRole('option', { name: 'Margin' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Blank').click();
    await page.getByRole('option', { name: 'Long Option' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    
    //Option Strategy
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Option Strategy' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Correspondent').click();
    await page.getByRole('option', { name: 'SASS' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.locator('.MuiSelect-root').first().click();
    await page.getByRole('option', { name: 'Option' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Blank').click();
    await page.getByRole('option', { name: 'Covered' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Covered').click();
    await page.getByRole('option', { name: 'Naked', exact: true }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Naked').click();
    await page.getByRole('option', { name: 'Naked-Spread' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Naked-Spread').click();
    await page.getByRole('option', { name: 'Spread', exact: true }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Margin Type').click();
    await page.getByRole('option', { name: 'Cash' }).click();
    await page.getByLabel('Margin Type').click();
    //await page.getByRole('option', { name: 'CPM' }).click();
    //await page.getByLabel('Margin Type').click();
    await page.getByRole('option', { name: 'Margin' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Grid').click();
    await page.getByRole('option', { name: 'Collapsible' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    
    //Time And Tick
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Time And Tick' }).click();
    await page.locator('input[name="fromDate"]').fill('2020-01-01');
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.locator('.MuiSelect-root').first().click();
    await page.getByRole('option', { name: 'Equity' }).click();
    await page.getByLabel('Symbol').click();
    await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
    await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Blank').click();
    await page.getByRole('option', { name: 'BP Call' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('BP Call').click();
    await page.getByRole('option', { name: 'Max DB Used' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Max DB Used').click();
    await page.getByRole('option', { name: 'Blank' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();

    //Segregation
    await page.getByRole('button', { name: 'Compliance' }).click();
    await page.getByRole('link', { name: 'Segregation' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Blank').click();
    await page.getByRole('option', { name: 'Broker Dealer', exact: true }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Broker Dealer').click();
    await page.getByRole('option', { name: 'Non Broker Dealer - Customer' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.getByLabel('Per Account').click();
    await page.getByRole('option', { name: 'On the Firm Level/Symbol' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
    await page.locator('.MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').first().click();
    await page.getByRole('option', { name: 'Equity' }).click();
    await page.getByLabel('Symbol', { exact: true }).click();
    await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
    await page.getByRole('option', { name: 'AAPL Stat: A | Type: E | Cusp' }).click();
    await page.locator('button').filter({ hasText: 'Search' }).click();
   
}