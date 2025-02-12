export async function glReportPage(page) {
  await page.getByRole("button", { name: "Balance" }).click();
  await page.getByRole("link", { name: "Balance Activity" }).click();
  await page.locator('input[name="fromDate"]').fill("2020-01-01");
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Settle Date").click();
  await page.getByRole("option", { name: "Trade Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: "SASS" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page
    .getByTestId("MuiDataTableBodyCell-1-0")
    .getByLabel("details")
    .click();
  const page1 = await page1Promise;
  await page1.goto(
    "https://sasclearing.softwarealgo.com/app/trns/activity/?dateType=Trade%20Date&accountNo=0001&toDate=2025-02-11&fromDate=2020-01-01&origin=gl-report&symbolSelectField=symbol&searchType=Uncompress"
  );
  await page.getByLabel("Blank").click();
  await page.getByRole("option", { name: "Client" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("Client").click();
  await page.getByRole("option", { name: "GL" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
  await page.getByLabel("GL").click();
  await page.getByText("Blank").click();
  await page.getByLabel("Trade Date").click();
  await page.getByRole("option", { name: "Settle Date" }).click();
  await page.locator("button").filter({ hasText: "Search" }).click();
}
