import fs from "fs";
import path from "path";
import { WebClient } from "@slack/web-api";

const slackToken = window.env.SLACK_TOKEN;
const slackChannel = "#app-error";
const slackClient = new WebClient(slackToken);

const screenshotPage = async (page, component) => {
  // Ensure the screenshots directory exists
  const screenshotsDir = path.join("C:\\SAS\\attachments", "screenshots");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // Wait for a specific element to be visible
  await page.waitForSelector("text=search results");

  // Verify the expected condition
  const element = await page.$("text=search results");
  const text = await element.textContent();
  //expect(text).toBe("search results");

  // Conditional screenshot
  let screenshotPath;
  if (text.includes("search results")) {
    console.log("Condition met. Taking screenshot...");
    const ssPassedDir = path.join(screenshotsDir, "Passed");
    if (!fs.existsSync(ssPassedDir)) {
      fs.mkdirSync(ssPassedDir);
    }
    screenshotPath = path.join(ssPassedDir, component + "-passed.png");
    await page.screenshot({ path: screenshotPath });
  } else {
    console.log("Condition not met. Taking screenshot...");
    const ssFailedDir = path.join(screenshotsDir, "Failed");
    if (!fs.existsSync(ssFailedDir)) {
      fs.mkdirSync(ssFailedDir);
    }
    screenshotPath = path.join(ssFailedDir, component + "-failed.png");
    await page.screenshot({ path: screenshotPath });

    // Send a message to Slack
    await slackClient.chat.postMessage({
      channel: slackChannel,
      text: component + " page has search error.",
    });

    // Upload the screenshot to Slack
    await slackClient.files.upload({
      channels: slackChannel,
      file: fs.createReadStream(screenshotPath),
      title: component,
    });
  }
};

export { screenshotPage };
