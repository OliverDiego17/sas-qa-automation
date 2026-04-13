import { chromium } from "@playwright/test";
import sql from "mssql";
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
import { enterTrnsTest } from "./Test/enterTrnsTest.js";
import { buyingPowerPage } from "./BuyingPower/BuyingPowerSearch.js";
import { callLogPage } from "./CallLog/CallLogSearch.js";
import { cashCallLogPage } from "./CashCallLog/CashCallLogSearch.js";
import { cashShortSellPage } from "./CashShortSell/CashShortSellSearch.js";
import { marginRequirementPage } from "./MarginRequirement/MarginRequirementSearch.js";
import { optionComboStrategyPage } from "./OptionComboStrategy/OptionComboStrategySearch.js";
import { optionStrategyPage } from "./OptionStrategy/OptionStrategySearch.js";
import { timeAndTickPage } from "./TimeAndTick/TimeAndTickSearch.js";
import { segregationPage } from "./Segregation/SegregationSearch.js";
import { averageDailyVolumePage } from "./AverageDailyVolume/AverageDailyVolumeSearch.js";
import { concentrationPage } from "./Concentration/ConcentrationSearch.js";
import { layeringPage } from "./Layering/LayeringSearch.js";
import { miniManipulationPage } from "./MiniManipulation/MiniManipulationSearch.js";
import { oddLotPage } from "./OddLot/OddLotSearch.js";
import { parameterPage } from "./Parameter/ParameterSearch.js";
import { tradeParticipationPage } from "./TradeParticipation/TradeParticipationSearch.js";
import { spoofingPage } from "./Spoofing/SpoofingSearch.js";
import { undueConcentrationPage } from "./UndueConcentration/UndueConcentrationSearch.js";
import { washSalePage } from "./WashSale/WashSaleSearch.js";
import si from "systeminformation";

async function launchResponsiveOnMonitor(monitorIndex = 1) {
  const graphics = await si.graphics();
  const displays = graphics.displays;

  console.log("Detected displays:", displays);

  // Pick the monitor you want (0 = primary, 1 = secondary, etc.)
  const target = displays[monitorIndex];
  if (!target) throw new Error(`Monitor ${monitorIndex} not found`);

  const { resolutionX, resolutionY, positionX, positionY } = target;

  const browser = await chromium.launch({
  headless: false,
  args: [
    `--window-position=${positionX},${positionY}`,
    `--window-size=${resolutionX},${resolutionY}`
  ]
});

// Option 1: responsive
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
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

  //Compliance - Risk Manage

  await buyingPowerPage(page);
  await callLogPage(page);
  await cashCallLogPage(page);
  await marginRequirementPage(page);
  await optionComboStrategyPage(page);
  await optionStrategyPage(page);
  await timeAndTickPage(page);
  await segregationPage(page);

  //Surveillance - Trade Monitoring

  await averageDailyVolumePage(page);
  await cashShortSellPage(page);
  await concentrationPage(page);
  await layeringPage(page);
  await miniManipulationPage(page);
  await oddLotPage(page);
  await parameterPage(page);
  await spoofingPage(page);
  await tradeParticipationPage(page);
  await undueConcentrationPage(page);
  await washSalePage(page);

  await enterTrnsTest(page);

  await new Promise(() => {});
}
launchResponsiveOnMonitor(1); // 1 = second monitor

