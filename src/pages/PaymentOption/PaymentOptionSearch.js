import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function paymentOptionPage(page) {
  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Payment Option" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.getByLabel("Active").click();
  await page.getByRole("option", { name: "Inactive" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Inactive").click();
  await page.getByRole("option", { name: "Blank" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
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
  await screenshotPage(page, componentText);

  //Add function
  //await page.getByRole("button", { name: "Add New" }).click();
  //await page.getByLabel("Add New Payment Option").locator("#correspondent").click();
  //await page.getByRole("option", { name: "SASS" }).click();
  //await page.getByLabel("Add New Payment Option").locator("#mui-component-select-entryType").click();
  //await page.getByRole("option", { name: "Dividend" }).click();
  //await page.locator('input[name="fromDate"]').fill("2025-02-13");
  //await page.getByRole("textbox", { name: "Symbol" }).click();
  //await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  //await page.getByRole("option", { name: "AAPL 280229 | 037833100 |" }).click();
  //await page.getByLabel("Add New Payment Option").locator("#mui-component-select-paymentOption").click();
  //await page.getByRole("option", { name: "Reinvest" }).click();
  //await page.getByRole("button", { name: "Save" }).click();
  //await page.getByLabel("Symbol").click();
  //await page.getByRole("textbox", { name: "Symbol" }).fill("AAPL");
  //await page.getByRole("option", { name: "AAPL Stat: A | Type: E | Cusp" }).click();
  //await page.locator("button").filter({ hasText: "Search" }).click();
}
