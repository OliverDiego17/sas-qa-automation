export async function positionPage(page) {
  await page.getByRole("button", { name: "Position" }).click();
  await page
    .getByRole("link", { name: "Position", exact: true })
    .nth(2)
    .click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.waitForTimeout(1000);
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page
    .locator(
      ".MuiGrid-root > div > div > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    )
    .click();
  await page.getByRole("option", { name: "Equity" }).click();
  await page.getByLabel("Symbol").click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  await page
    .getByRole("option", { name: "AAPL Stat: A | Type: E | Cusp" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.waitForTimeout(1000);
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  // await context.close();
  // await browser.close();
}
