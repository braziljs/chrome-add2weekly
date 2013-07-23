'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    var action = request.action

    if (!!action) {
        sendResponse({error: true, errorText: 'Você deve passar uma propriedade action', errorCode: 1});
    } else if (action == 'verificaSeAindaNaoFoiEnviadaPeloUsuario') {
        console.log('Verifica se já foi submetido por este usuário');
    } else {
        sendResponse({error: true, errorText: 'Essa action não encontrada em background.js', errorCode: 2});
    }
});