import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function betaBalReconPage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "Beta Balance Recon" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();

  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");

  await screenshotPage(page, componentText);
  await page.locator('input[name="date"]').fill("");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
