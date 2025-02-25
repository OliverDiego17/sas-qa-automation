import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function segregationPage(page) {
  await page.getByRole("button", { name: "Compliance" }).click();
  await page.getByRole("link", { name: "Segregation" }).click();
  await page.getByLabel("Per Account").click();
  await page.getByRole("option", { name: "On the Firm Level/Symbol" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page
    .locator(
      ".MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root"
    )
    .first()
    .click();
  await page.getByRole("option", { name: "Equity" }).click();
  await page.getByLabel("Symbol", { exact: true }).click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("aapl");
  await page
    .getByRole("option", { name: "AAPL Stat: A | Type: E | Cusp" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("On the Firm Level/Symbol").click();
  await page.getByRole("option", { name: "Per Account" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Blank").click();
  await page
    .getByRole("option", { name: "Broker Dealer", exact: true })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Broker Dealer").click();
  await page
    .getByRole("option", { name: "Non Broker Dealer - Customer" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
