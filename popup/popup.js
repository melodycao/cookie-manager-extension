chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "cookieBannerDetected") {
    const bannerCount = message.count;
    document.getElementById("visualization").innerHTML = `
      <p>Detected ${bannerCount} cookie banner(s) on this page.</p>
    `;
  }
});
