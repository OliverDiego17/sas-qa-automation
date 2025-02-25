import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function buyingPowerPage(page) {
  await page.getByRole("button", { name: "Compliance" }).click();
  await page.getByRole("link", { name: "Buying Power" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();

  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");

  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  //await page.getByRole('button', { name: 'Rerun Buying Power' }).click();
  //await page.getByLabel('Rerun', { exact: true }).check();
  //await page.getByRole('button', { name: 'Process' }).click();
  await page.getByTestId("headcol-4").click();
  await page.getByTestId("headcol-4").click();
}
