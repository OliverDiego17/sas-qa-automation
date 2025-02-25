import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function washSalePage(page) {
  await page
    .getByRole("banner")
    .getByRole("button", { name: "Surveillance" })
    .click();
  await page.getByRole("link", { name: "Wash Sale" }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: "visible" });
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
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
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page
    .getByTestId("MuiDataTableBodyCell-1-0")
    .getByRole("button", { name: "details" })
    .click();
  await page.locator(".MuiBackdrop-root").click();
  await page.getByLabel("close").click();
}
