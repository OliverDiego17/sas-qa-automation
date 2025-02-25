import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function spoofingPage(page) {
  await page.getByRole("button", { name: "Surveillance" }).click();
  await page.getByRole("link", { name: "Spoofing" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.locator('input[name="tradeDate"]').fill("");
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator(".MuiSelect-root").first().click();
  await page.getByRole("option", { name: "Equity" }).click();
  await page.getByLabel("Symbol").click();
  await page
    .getByRole("option", {
      name: "A Stat: A | Type: E | Cusp: 00846U101 | Orig: 00846U101 Dscr: AGILENT",
    })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
