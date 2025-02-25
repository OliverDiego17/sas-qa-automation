import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function trialBalancePage(page) {
  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Balance" }).click();
  await page.getByRole("link", { name: "Trial Balance" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.getByLabel("Trade and Settle").click();
  await page.getByRole("option", { name: "ATL Trade and Settle" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("ATL Trade and Settle").click();
  await page
    .getByRole("option", { name: "Trade and Settle", exact: true })
    .click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("GL").click();
  await page.getByRole("option", { name: "Blank" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator("#mui-component-select-sumUpBy").click();
  await page.getByRole("option", { name: "Account No", exact: true }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator("#mui-component-select-sumUpBy").click();
  await page.getByRole("option", { name: "Correspondent" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator("#mui-component-select-sumUpBy").click();
  await page.getByRole("option", { name: "Blank" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
