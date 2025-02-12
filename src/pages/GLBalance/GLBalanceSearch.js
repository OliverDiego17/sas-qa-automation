export async function glBalancePage(page) {
  await page.getByRole("button", { name: "Balance", exact: true }).click();
  await page.getByRole("link", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.locator('input[name="date"]').fill("");
  await page.locator("button").filter({ hasText: "Search" }).click();
}
