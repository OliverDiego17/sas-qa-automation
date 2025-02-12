export async function pendingTrnsPage(page) {
  //PENDING TRNS
  await page.getByRole("button", { name: "Transaction" }).click();
  await page.getByRole("link", { name: "Pending TRNS" }).click();
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
  await page.getByLabel("Pending/Rejected").click();
  await page.getByRole("option", { name: "Correct" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Correct").click();
  await page.getByRole("option", { name: "Executed" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Executed").click();
  await page.getByRole("option", { name: "Pending", exact: true }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Pending").click();
  await page.getByRole("option", { name: "Rejected", exact: true }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Rejected").click();
  await page.getByText("Blank").click();
  await page.getByLabel("Entry Type").click();
  await page.getByRole("option", { name: "TRD - Trade Entry" }).click();
  await page.waitForTimeout(1000);
  await page.locator("button").filter({ hasText: "Search" }).click();

  // await context.close();
  // await browser.close();
}
