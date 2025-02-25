import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function balancePage(page) {
  await page.getByRole("button", { name: "Balance" }).click();
  await page.getByRole("link", { name: "Balance", exact: true }).nth(1).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();

  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");

  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("textbox", { name: "Correspondent" }).fill("SASS");
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("GL").click();
  await page.getByRole("option", { name: "Blank" }).click();
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
  await screenshotPage(page, componentText);
  // await context.close();
  // await browser.close();
}
