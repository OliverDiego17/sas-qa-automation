export async function balanceSummaryReportPage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Balance Summary" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Settle Date").click();
  await page.getByRole("option", { name: "Trade Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.locator("#mui-component-select-broker").click();
  await page
    .getByRole("option", { name: "Broker Dealer", exact: true })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Broker Dealer").click();
  await page
    .getByRole("option", { name: "Non Broker Dealer - Customer" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Non Broker Dealer - Customer").click();
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
}
