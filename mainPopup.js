// ==UserScript==
// @name         Main Module
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const startButtonContainer = document.createElement('div');
    //const startButton = document.createElement('button');
    startButtonContainer.innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }

      .cls-2 {
        fill: #18ee18;
      }
    </style>
  </defs>
  <circle class="cls-2" cx="15" cy="15" r="15"/>
  <g>
    <path class="cls-1" d="m20.52,14.06c-.97-.48-2.43-.5-2.65-.5h-.01c-.16,0-2.97.07-3.21.1-.64.08-1,.28-1.08.6-.05.18-.02.46.38.75.29.22.87.21,1.97.17,1.18-.04,2.8-.1,3.47.41.73.55.69,1.33.66,1.8,0,.05,0,.09,0,.13-.06,1.78-2.17,3.68-4.92,3.68-3.81,0-5.88-3.64-5.88-7.17s2.21-6.15,5.37-6.15c2.31,0,4.37.98,4.78,2.27.26.84.54,1.53,1.26,1.53s1.06-.57,1.06-1.68c0-1.7-.48-3.42-1.55-3.42-.4,0-.7.26-.83.72-1.29-.87-3-1.38-4.68-1.38-4.7,0-8.38,3.84-8.38,8.75s3.69,8.63,8.59,8.63c3.81,0,6.17-1.54,7.04-4.57.05-.16.17-.96.18-1.17.08-1.66-.5-2.97-1.55-3.5Z"/>
    <path class="cls-1" d="m16.68,9.92s-.7.93-.06,2.5,1.93,1.42,1.93,1.42c0,0,.42-1.23-.18-2.29s-1.7-1.63-1.7-1.63Z"/>
    <path class="cls-1" d="m12.93,18.88s1.3.16,2.46-1.34.3-2.68.3-2.68c0,0-1.43.28-2.13,1.46s-.63,2.56-.63,2.56Z"/>
    <path class="cls-1" d="m17.39,18.05s.36-1.35-.08-2.15c-.5-.92-1.66-1.04-1.66-1.04,0,0-.39,1.2.16,2.05s1.58,1.15,1.58,1.15Z"/>
  </g>
</svg>`;


    //startButtonContainer.appendChild(startButton);
    startButtonContainer.classList.add('startButton');

    document.body.appendChild(startButtonContainer);
})();