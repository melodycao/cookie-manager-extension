chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "cookieBannerDetected") {
    console.log(`Detected ${message.count} cookie banner(s) on`, sender.tab.url);
    // Optional: Perform actions like storing data or sending a notification
  }
});
