import { chromium } from "playwright";
import { loginPage } from "./Login.js";
import { activityPage } from "./Activity/ActivitySearch.js";
import { positionPage } from "./Position/PositionSearch.js";
import { balancePage } from "./Balance/BalanceSearch.js";
import { pendingTrnsPage } from "./PendingTRNS/PendingTRNSSearch.js";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext(); // Use browser.newContext() instead of browser.newPage()
  const page = await context.newPage();

  let screen_sizes = [{ device: "Desktop", width: 1910, height: 1100 }];

  for (let size of screen_sizes) {
    await page.setViewportSize({ width: size.width, height: size.height });
    console.log(`Viewport set to: ${size.width}x${size.height}`);
  }

  await loginPage(page);
  await activityPage(page);
  await positionPage(page);
  await balancePage(page);
  await pendingTrnsPage(page);

  await context.close();
  await browser.close();
})();
