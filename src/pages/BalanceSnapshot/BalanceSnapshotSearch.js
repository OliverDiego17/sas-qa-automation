export async function balanceSnapshotPage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Balance Snapshot" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Settle Date").click();
  await page.getByRole("option", { name: "System Date" }).click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("System Date").click();
  await page.getByRole("option", { name: "Trade Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Trade Date").click();
  await page.getByRole("option", { name: "Trade and Settle" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Trade and Settle").click();
  await page.getByRole("option", { name: "Settle Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: "Client" }).click();
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
  await page.getByLabel("Blank").click();
  await page.getByRole("option", { name: "BOD" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("BOD").click();
  await page.getByRole("option", { name: "SEG" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("SEG").click();
  await page.getByText("Blank").click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
}
