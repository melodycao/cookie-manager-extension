console.log("Cookie Manager Extension content script loaded.");

// Example: Detect cookie banners and notify the background script
document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.querySelector(".cookie-banner");
  if (cookieBanner) {
    console.log("Cookie banner detected.");
    chrome.runtime.sendMessage({ action: "cookieBannerDetected" });
  }
});
