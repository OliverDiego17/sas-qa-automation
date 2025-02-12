export async function currencyBalancePage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Currency Balance" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByRole("button", { name: "Clear" }).click();
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
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
}
