// ==UserScript==
// @name         Remove YouTube 'Clarify'
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Don't leg Big Tech bias you. This script removes their Clarify Box.
// @author       egaudette
// @source       https://github.com/egaudette/Clarify.git
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.getElementById('clarify-box').remove();
    }, 1000);
})();