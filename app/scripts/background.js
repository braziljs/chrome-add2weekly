'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.pageAction.show(tabId);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.pageAction.show(tabId);
});
