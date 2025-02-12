// Listen for the extension icon click event
chrome.action.onClicked.addListener((tab) => {
  // Get the current tab's URL
  const currentUrl = tab.url;
  
  // Create the Gmail compose URL with the current page URL inserted into the body
  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&body=" + encodeURIComponent(currentUrl);
  
  // Open a new popup window with the Gmail compose page
  chrome.windows.create({
    url: gmailComposeUrl,
    type: "popup",
    width: 400,   // Adjust width as needed
    height: 400   // Adjust height as needed
  });
});
