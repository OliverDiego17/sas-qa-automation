import { chromium } from '@playwright/test';
import { loginPage } from "./Login.js";
import { activityPage } from "./Activity/ActivitySearch.js";
import { positionPage } from "./Position/PositionSearch.js";
import { balancePage } from "./Balance/BalanceSearch.js";
import { pendingTrnsPage } from "./PendingTRNS/PendingTRNSSearch.js";
import { glReportPage } from "./GLReport/GLReportSearch.js";
import { balanceSnapshotPage } from "./BalanceSnapshot/BalanceSnapshotSearch.js";
import { balanceSummaryReportPage } from "./BalanceSummaryReport/BalanceSummaryReportSearch.js";
import { betaBalReconPage } from "./BetaBalRecon/BetaBalReconSearch.js";
import { currencyBalancePage } from "./CurrencyBalance/CurrencyBalanceSearch.js";
import { glBalancePage } from "./GLBalance/GLBalanceSearch.js";
import { paymentOptionPage } from "./PaymentOption/PaymentOptionSearch.js";
import { trialBalancePage } from "./TrialBalance/TrialBalanceSearch.js";
import { unsecuredDebitBalancePage } from "./UnsecuredDebitBalance/UnsecuredDebitBalanceSearch.js";
import { riskmanagerTest } from "./Test/riskmanagerTest.js";
import { surveillanceTest } from './Test/surveillanceTest.js';

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
  //Balance - Cash
  await glReportPage(page);
  await balanceSnapshotPage(page);
  await balanceSummaryReportPage(page);
  await betaBalReconPage(page);
  await currencyBalancePage(page);
  await glBalancePage(page);
  await paymentOptionPage(page);
  await trialBalancePage(page);
  await unsecuredDebitBalancePage(page);
  await riskmanagerTest(page);
  await surveillanceTest(page);

 
 

 

 
 
 
 
 
 
 
 
 

  await context.close();
  await browser.close();
})();
