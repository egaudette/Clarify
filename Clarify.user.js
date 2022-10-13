// ==UserScript==
// @name         Remove YouTube 'Clarify'
// @namespace    http://www.ethangaudette.com/clarify
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
    var deleteInterval = setInterval(deleteClarify, 500);
    var clarifyBox;
    var maxInterval = 0;
    function deleteClarify() {
        clarifyBox = document.getElementById('clarify-box');
        maxInterval ++;
        if (clarifyBox != null) {
            clarifyBox.remove();
            clearInterval(deleteInterval);
        }
        if (maxInterval == 40) {
            clearInterval(deleteInterval);
        }
    }
})();