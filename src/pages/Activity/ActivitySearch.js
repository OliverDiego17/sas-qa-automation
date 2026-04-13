import { getDbConnection, sql } from "../../helpers/dbConnection.js";


async function getOneAccountWithActivity() {
  const pool = await getDbConnection();

 const result = await pool.request().query(`
    SELECT TOP 1 
        c.account_no,
        a.trade_date,
        a.settle_date,
        a.symbol,
        a.type
    FROM account.client c WITH (NOLOCK)
    INNER JOIN report.activity a WITH (NOLOCK)
        ON c.account_id = a.account_id
    WHERE c.correspondent = 'SASS'
      AND c.status = 'Active'
      AND a.correspondent = 'SASS'
    ORDER BY a.created_at DESC;
  `);

  await pool.close();

  if (result.recordset.length === 0) return null;

  const r = result.recordset[0];
  return {
    accountNo: r.account_no,
    fromDate: new Date(r.trade_date).toISOString().split("T")[0],
    toDate: new Date(r.settle_date).toISOString().split("T")[0],
    symbol: r.symbol,
    type: r.type,
    correspondent: "SASS"
  };
}

export async function activityPage(page) {
  await page
    .locator("button", { hasText: "Transaction" })
    .waitFor({ state: "visible", timeout: 120000 });
  await page.getByRole("button", { name: "Transaction" }).click();
  await page
    .getByRole("link", { name: "Activity", exact: true })
    .nth(1)
    .click();

{
  const acc = await getOneAccountWithActivity();
  if (!acc) {
    console.log("No account found.");
    return;
  }

  console.log(`Searching for account: ${acc.accountNo}`);

  await page.getByRole("button", { name: "Transaction" }).click();
  await page.getByRole("link", { name: "Activity", exact: true }).nth(1).click();

  // Dates
  await page.locator('input[name="fromDate"]').fill(acc.fromDate);
  await page.locator('input[name="toDate"]').fill(acc.toDate);

  // Correspondent
  await page.getByLabel("Correspondent").click();
  await page.getByRole("option", { name: acc.correspondent }).click();

  // Account number (autocomplete flow)
  await page.locator('input[name="accountNo"]').click();
  await page.locator('input[name="accountNo"]').fill(acc.accountNo);
  await page.waitForTimeout(1000);
  await page.getByRole("option", { name: new RegExp(`^${acc.accountNo}`, "i") }).click();

  // Type
  await page.locator("#mui-component-select-type").click();
  await page.getByRole("option", { name: acc.type }).click();

  // Symbol
  await page.getByLabel("Symbol").click();
  await page.getByRole("textbox", { name: "Symbol" }).fill(acc.symbol);
  await page.getByRole("option", { name: new RegExp(acc.symbol, "i") }).click();

  // Search
  await page.locator("button").filter({ hasText: "Search" }).click();
} }