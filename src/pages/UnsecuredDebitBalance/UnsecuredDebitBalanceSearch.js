export async function unsecuredDebitBalancePage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Unsecured Debit Balance" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Trade and Settle").click();
  await page.getByRole("option", { name: "ATL Trade and Settle" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("ATL Trade and Settle").click();
  await page
    .getByRole("option", { name: "Trade and Settle", exact: true })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.locator("#mui-component-select-broker").click();
  await page
    .getByRole("option", { name: "Non Broker Dealer - Customer" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Non Broker Dealer - Customer").click();
  await page
    .getByRole("option", { name: "Broker Dealer", exact: true })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
}
