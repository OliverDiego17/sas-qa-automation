import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function averageDailyVolumePage(page) {
  await page
    .getByRole("banner")
    .getByRole("button", { name: "Surveillance" })
    .click();
  //await page.getByRole('button', { name: 'Surveillance' }).click();
  await page.getByRole("link", { name: "Average Daily Volume" }).click();
  await page.locator('input[name="fromDate"]').waitFor({ state: "visible" });
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
  await page.locator(".MuiSelect-root").first().click();
  await page.getByRole("option", { name: "Equity" }).click();
  await page.getByLabel("Symbol").click();
  await page.getByRole("textbox", { name: "Symbol" }).fill("b");
  await page
    .getByRole("option", {
      name: "B Stat: A | Type: E | Cusp: 067806109 | Orig: 045825106 Dscr: BARNES GROUP INC",
    })
    .click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
