// Login.js
export async function loginPage(page) {
  // Navigate to login page
 await page.goto("https://sasclearing.softwarealgo.com", {timeout: 120000});
 await page.waitForNavigation();
 
  //await page.goto("https://sas-dev.curvaturesecurities.com/login");

  // Login process
  await page.locator('input[name="email"]').fill("sas@softwarealgo.com");
  await page.locator('input[name="password"]').fill("45CRyl6PsjcaA0cKgCW2@");
  //await page.locator('input[name="email"]').fill("hubertblaine.sas@gmail.com");
  //await page.locator('input[name="password"]').fill("Test@123");
  await page.getByRole("button", { name: "Login" }).click();

  // --- Insert OTP Logic Here ---
  //await page.getByRole('button', { name: 'Submit' }).click();

  // await context.close();
  // await browser.close();
}
