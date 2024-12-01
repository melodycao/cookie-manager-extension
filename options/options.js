document.getElementById("save").addEventListener("click", () => {
    const preferences = {
      blockMarketing: document.getElementById("blockMarketing").checked,
      blockAnalytics: document.getElementById("blockAnalytics").checked,
    };
  
    chrome.storage.sync.set(preferences, () => {
      alert("Preferences saved.");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["blockMarketing", "blockAnalytics"], (preferences) => {
      document.getElementById("blockMarketing").checked = preferences.blockMarketing || false;
      document.getElementById("blockAnalytics").checked = preferences.blockAnalytics || false;
    });
  });
  