import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function cashCallLogPage(page) {
  await page.getByRole("button", { name: "Compliance" }).click();
  await page.getByRole("link", { name: "Cash Call Log" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.getByLabel("Blank").click();
  await page.getByRole("option", { name: "Close" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Close").click();
  await page.getByRole("option", { name: "Extended" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Extended").click();
  //await page.getByRole('option', { name: 'Free Riding' }).click();
  //await page.locator('button').filter({ hasText: 'Search' }).click();
  //await page.getByLabel('Free Riding').click();
  await page.getByRole("option", { name: "Outstanding" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Outstanding").click();
  await page.getByRole("option", { name: "Pending" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
