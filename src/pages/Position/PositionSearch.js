import { getDbConnection, sql } from "../../helpers/dbConnection.js";

import { screenshotPage } from "../../util/ScreenshotPage.js";

export async function getOnePositionRecord() {
  const pool = await getDbConnection();

  const result = await pool.request().query(`
     SELECT TOP 1 
        c.account_no,
        p.date_type,
	      p.date,
        p.symbol,
        p.type
    FROM account.client c WITH (NOLOCK)
    INNER JOIN report.position p WITH (NOLOCK)
        ON c.account_id = p.account_id
    WHERE c.correspondent = 'SASS'
      AND c.status = 'Active'
      AND p.correspondent = 'SASS'
    ORDER BY p.date DESC;
  `);

  await pool.close();
function safeDate(val) {
  return val ? new Date(val).toISOString().split("T")[0] : "";
}

const r = result.recordset[0];
return {
  accountNo: r.account_no,
  fromDate: safeDate(r.date),
  toDate: safeDate(r.date),
  symbol: r.symbol,
  type: r.type,
  correspondent: "SASS"
};
}


export async function positionPage(page) {
  const acc = await getOnePositionRecord();
  if (!acc) {
    console.log("No position record found.");
    return;
  }

  console.log(`Running position search for account: ${acc.accountNo}`);

  await page.getByRole("button", { name: "Position" }).click();
  await page.getByRole("link", { name: "Position", exact: true }).nth(3).click();

  // Dates
  await page.locator('input[name="fromDate"]').fill(acc.fromDate);
  await page.locator('input[name="toDate"]').fill(acc.toDate);

  // Search
  await page.locator("button").filter({ hasText: "Search" }).click();
  const component = await page.locator("h5").allTextContents();
  const componentText = component.join("/");
  await screenshotPage(page, componentText);

  // Correspondent
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: acc.correspondent }).click();
  await page.waitForTimeout(1000);
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);

  // Type
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: acc.type }).click();

  // Symbol
  await page.getByLabel("Symbol").click();
  await page.getByRole("textbox", { name: "Symbol" }).fill(acc.symbol);
  await page.getByRole("option", { name: new RegExp(acc.symbol, "i") }).click();

  // Final search
  await page.locator("button").filter({ hasText: "Search" }).click();
  await screenshotPage(page, componentText);
}
