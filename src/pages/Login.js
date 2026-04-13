import sql from 'mssql';

async function getLatestOtp(userId) {
  const pool = await sql.connect({
    user: 'sasdbuser',
    password: 'TrustNo1',
    server: '10.8.1.2',
    port: 1533,
    database: 'Clearing',
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  });

  const result = await pool.request()
    .input('usr_id', sql.Int, userId)
    .query(`
      SELECT TOP 1 code 
      FROM usr.administrator WITH (NOLOCK) 
      WHERE usr_id = @usr_id 
      ORDER BY created_at DESC
    `);
    

  await pool.close();
  return result.recordset[0]?.code;
}

export async function loginPage(page) {
  await page.goto("https://sasclearing.softwarealgo.com/login", { timeout: 120000 });
  await page.waitForLoadState('domcontentloaded');

  await page.locator('input[name="email"]').fill("sas.softwarealgo@gmail.com");
  await page.locator('input[name="password"]').fill("Test@123");
  await page.getByRole("button", { name: "Login" }).click();

  // Anchor OTP field to its label
  const otpField = page.getByText('Authentication Code').locator('..').getByRole('textbox');

  let otpCode;
  for (let i = 0; i < 6; i++) { // retry for ~30 seconds
    otpCode = await getLatestOtp(231);
    console.log(`Attempt ${i + 1}: OTP = ${otpCode}`);

    if (otpCode && /^\d{6}$/.test(otpCode)) {
      // Clear the field before refilling
      await otpField.fill(""); 
      await otpField.fill(otpCode.toString());

      // Try submit
      await page.getByRole('button', { name: 'Submit' }).click();

      // Wait briefly to see if login succeeds
      try {
        await page.waitForURL("**/app/integration/dashboard", { timeout: 5000 });
        console.log("Login successful with OTP:", otpCode);
        break;
      } catch {
        console.log("Invalid OTP, retrying...");
      }
    }

    // wait 5 seconds before retry
    await new Promise(res => setTimeout(res, 5000));
  }

  if (!otpCode) {
    throw new Error("No valid OTP found after retries");
  }


  await page.waitForURL("https://sasclearing.softwarealgo.com/app/integration/dashboard");
}
