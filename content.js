// Helper function to find cookie banners
function findCookieBanner() {
  // Example: Search for elements that might be cookie banners
  const possibleBanners = document.querySelectorAll("[class*='cookie'], [id*='cookie'], [class*='consent'], [id*='consent']");

  if (possibleBanners.length > 0) {
    console.log("Cookie banner(s) detected:", possibleBanners);

    // Highlight the banners (optional)
    possibleBanners.forEach((banner) => {
      banner.style.border = "2px solid red";
      banner.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    });

    // Send a message to the background script
    chrome.runtime.sendMessage({ action: "cookieBannerDetected", count: possibleBanners.length });
  } else {
    console.log("No cookie banner detected on this page.");
  }
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", findCookieBanner);
