chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "popupAlarm") {
        // create popup window
        chrome.windows.create({
            url: chrome.runtime.getURL("popup.html"), 
            type: "popup",
            width: 400, 
            height: 300,
        }); 
    }
});
