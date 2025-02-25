import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function undueConcentrationPage(page) {
  await page
    .getByRole("banner")
    .getByRole("button", { name: "Surveillance" })
    .click();
  await page.getByRole("link", { name: "Undue Concentration" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.locator('input[name="tradeDate"]').fill("");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator(".MuiSelect-root").first().click();
  await page.getByRole("option", { name: "Equity" }).click();
  await page.getByLabel("Symbol").click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("aapl");
  await page
    .getByRole("option", { name: "AAPL Stat: A | Type: E | Cusp" })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
