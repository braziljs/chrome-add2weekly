'use strict';

chrome.extension.onRequest.addListener(function (res, id, send) {
    if (res.action === 'initPopUp') {
        send({
            href: location.href,
            title: document.querySelectorAll('title')[0].innerText
        });
    }
});