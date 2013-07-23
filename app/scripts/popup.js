'use strict';

chrome.runtime.sendMessage({action: 'verificaSeAindaNaoFoiEnviadaPeloUsuario'}, function(response) {
  console.log(response.answer);

    var iSrc = 'http://braziljs.org/services/add2weekly/mdl-add2weekly.php?',
        create = function(t, l, c, dv) {
            var i = document.createElement('iframe');
            c.appendChild(dv);
            i.src = iSrc + "t=" + escape(t) + "&l=" + escape(l.replace(/http:\/\/|https:\/\//i, ''));
            i.style.position = 'relative';
            i.style.background = 'white';
            i.style.margin = '0px';
            i.style.width = '600px';
            i.style.height = '500px';
            i.style.border = 'none';

            c.appendChild(i);
        };

    if (!document.getElementById('brazilJS-add2wkly')) {
        create(document.title || "untitled", location.toString(), document.body || document, document.createElement('div'));
    }
});