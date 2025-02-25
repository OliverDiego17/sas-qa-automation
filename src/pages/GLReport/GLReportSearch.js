import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function glReportPage(page) {
  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Balance" }).click();
  await page.getByRole("link", { name: "Balance Activity" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.getByLabel("Settle Date").click();
  await page.getByRole("option", { name: "Trade Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Blank").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("GL").click();
  await page.getByText("Blank").click();
  await page.getByLabel("Trade Date").click();
  await page.getByRole("option", { name: "Settle Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
