chrome.runtime.onInstalled.addListener(() => {
    console.log("Cookie Manager Extension installed.");
  });
  
  chrome.cookies.onChanged.addListener((changeInfo) => {
    console.log("Cookie changed: ", changeInfo);
  });
  