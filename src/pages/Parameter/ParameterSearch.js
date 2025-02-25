import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function parameterPage(page) {
  await page
    .getByRole("banner")
    .getByRole("button", { name: "Surveillance" })
    .click();
  await page.getByRole("link", { name: "Parameter" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.locator('input[name="report"]').click();
  await page.locator('input[name="report"]').fill("LAYERING");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator('input[name="field"]').click();
  await page.locator('input[name="field"]').fill("Total Cancel Quantity");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
