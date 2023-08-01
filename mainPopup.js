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
    startButtonContainer.style.transform = 'translate(-100%, -50%)'
    startButtonContainer.style.top = '50%';
    startButtonContainer.style.left = '100%';
    startButtonContainer.classList.add('startButton');

    startButtonContainer.addEventListener('click', function(){
        const mainModuleContainer = document.createElement('div');

        mainModuleContainer.classList.add('mainModule');
        //mainModuleContainer.style.position = 'fixed';
                     //  mainModuleContainer.style.top = '50%';
                    //   mainModuleContainer.style.left = '100%';
                    //   mainModuleContainer.style.width = "40%";
                      // mainModuleContainer.style.height = "80%";
                     mainModuleContainer.style.transform = 'translate(-50%, -50%)';


        //Adding the close button and logic for it
        const exitButton = document.createElement('div')
        exitButton.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z" fill="#1C274C"/>
</svg>`;
        exitButton.classList.add('mainModExitButton');

        exitButton.addEventListener('click', function() {
            document.body.removeChild(mainModuleContainer);
        })
        mainModuleContainer.appendChild(exitButton)

        //Adding the logo
        const logoHeader = document.createElement('div');
        logoHeader.innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.69 109.53">
  <defs>
    <style>
      .cls-logo {
        fill: #18ee18;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path d="m70.91,42.25c-4.83-2.41-12.08-2.5-13.17-2.5h-.06c-.81,0-14.8.33-15.98.48-3.2.41-4.96,1.38-5.37,2.96-.23.9-.09,2.28,1.91,3.75,1.46,1.07,4.35,1.02,9.78.83,5.88-.21,13.94-.49,17.27,2.04,3.62,2.76,3.42,6.64,3.3,8.95-.01.24-.02.46-.03.65-.29,8.83-10.78,18.29-24.46,18.29-18.93,0-29.24-18.13-29.24-35.66s10.99-30.57,26.73-30.57c11.51,0,21.72,4.86,23.76,11.32,1.31,4.15,2.68,7.59,6.26,7.59s5.25-2.82,5.25-8.38c0-8.48-2.38-17.04-7.71-17.04-2.01,0-3.47,1.3-4.15,3.59-6.4-4.32-14.91-6.86-23.29-6.86C18.32,1.7,0,20.82,0,45.21s18.37,42.95,42.72,42.95c18.93,0,30.71-7.65,35-22.71.24-.8.86-4.79.9-5.8.41-8.28-2.47-14.78-7.72-17.4Z"/>
      <g>
        <path d="m107.26,78.44c-.86-1.05-.86-8.13-.86-11.2V26.17c0-4.83.08-9.11.15-12.55.05-2.46.09-4.56.09-6.24,0-3.57-.39-7.38-5.06-7.38-3.54,0-12.04,1.96-16.57,4.17-1.23.62-2.87,1.69-2.87,3.91,0,3.22,4.45,3.97,8.47,4.22.3.5,1.04,2.67,1.04,11.78v43.15c0,4.43,0,10.44-.8,11.19-3.64.21-7.44.76-7.44,4.23,0,4.66,7.89,5.29,15.62,5.29s15.62-.63,15.62-5.29c0-3.56-4.02-3.96-7.37-4.22Z"/>
        <path d="m171.24,66.35c-1.46,0-2.53.97-3.66,2l-.29.27c-3.32,3.32-8.13,7.13-15.88,7.13-10.41,0-17.39-7.07-18.41-18.53h33.26c4.91,0,8.08-3.81,8.08-9.7,0-10.47-9.27-21.3-24.78-21.3-17.3,0-30.35,14.04-30.35,32.67s11.67,30.23,28.38,30.23c13.07,0,20.47-7.15,23.01-10.18,2.52-2.75,4.09-6.03,4.09-8.56,0-2.96-1.78-4.02-3.44-4.02Zm-22.39-31.99c5.87,0,12.11,3.76,12.11,10.72,0,2.12-.8,3.52-4.68,3.52l-22.84.22c1.64-8.95,7.47-14.46,15.41-14.46Z"/>
        <path d="m239.57,78.67c-6.23-1.35-6.52-4.85-6.52-11.43v-21.81c0-12.21-7.17-19.21-19.68-19.21s-28.72,8.48-28.72,15.38c0,3.2,2.52,5.52,5.99,5.52,3.95,0,6.25-2.42,8.43-5.12,4.28-5.19,7.66-7.41,11.29-7.41,6.97,0,7.93,6.43,7.93,13.38v5.33c-4.43-1.06-8.36-1.58-11.99-1.58-15.38,0-25.71,7.86-25.71,19.56,0,10.42,8.14,17.7,19.79,17.7,7.85,0,14.5-3.28,18.93-9.29,2.6,6.85,7.64,8.37,11.57,8.37,6.78,0,10.4-4.22,10.4-7.26,0-1.53-.96-2.01-1.72-2.14Zm-21.05-16.59v2.84c0,7.7-5.95,13.96-13.27,13.96-5.79,0-9.67-3.75-9.67-9.32,0-5.98,4.83-9.56,12.92-9.56,3.88,0,7.61,1.03,10.02,2.08Z"/>
        <path d="m288.03,26.21c-8.37,0-16.25,4.33-20.74,11.09l.05-2.78c0-3.83-.61-7.38-5.06-7.38-3.18,0-11.84,1.86-16.13,4.06-1.97,1.05-2.85,2.25-2.85,3.9,0,3.23,4.2,3.97,8,4.22.34.51,1.16,2.66,1.16,11.67v37.82c0,3.37,0,10.32-.81,11.2-3.91.31-7.66.94-7.66,4.34,0,3.63,4.74,5.18,15.85,5.18s18.28-.85,18.28-5.18c0-3.45-3.69-3.92-9.74-4.35-1.16-.99-1.16-8.63-1.16-11.2v-5.37c4.56,3.55,10.55,5.56,16.75,5.56,16.64,0,28.72-13.64,28.72-32.44s-10.14-30.35-24.66-30.35Zm9.09,32.67c0,13.41-5.93,21.74-15.47,21.74s-14.78-7.42-14.78-20.34c0-11.57,4.86-23.24,15.7-23.24,8.83,0,14.54,8.58,14.54,21.85Z"/>
      </g>
    </g>
    <path class="cls-logo" d="m48.84,20.75s-3.49,4.61-.3,12.42c3.19,7.81,9.62,7.07,9.62,7.07,0,0,2.11-6.12-.88-11.4-2.99-5.28-8.43-8.09-8.43-8.09Z"/>
    <path class="cls-logo" d="m30.17,65.3s6.45.82,12.26-6.66,1.5-13.33,1.5-13.33c0,0-7.14,1.37-10.61,7.25-3.47,5.87-3.15,12.75-3.15,12.75Z"/>
    <path class="cls-logo" d="m52.34,61.19s1.79-6.7-.39-10.71c-2.49-4.58-8.26-5.17-8.26-5.17,0,0-1.93,5.97.77,10.18,2.7,4.21,7.88,5.71,7.88,5.71Z"/>
  </g>
</svg>`;
        logoHeader.classList.add('logoHeader')
        mainModuleContainer.appendChild(logoHeader)

        //Making the canvas display and map
        //Container
        const treesContainerContainer = document.createElement('div');
        const treeConatiner = document.createElement('div');
        const selectionConatiner = document.createElement('div');
        const canvasTitle = document.createElement('h2')
        canvasTitle.textConent = "Current Tree Progress / Tree Map";

        mainModuleContainer.appendChild(treesContainerContainer)
        treesContainerContainer.appendChild(canvasTitle)
        treesContainerContainer.appendChild(selectionConatiner)



        //Creating the div for canvas
        const canvasContainer = document.createElement('div');
        selectionConatiner. appendChild(canvasContainer)
        //canvasContainer
        canvasContainer.classList.add('canvasContainer')
        const test2 = document.createElement('div');
    document.body.appendChild(test2)
           var parent = document.createElement('div');
        parent.style.width = '100%';
        parent.style.height = '100vh';
        parent.style.position = 'relative';
        document.body.appendChild(parent);

        // Create progress bar
        var progress = document.createElement('progress');
        progress.id = 'progress';
        progress.value = 0;
        progress.max = 120;
        progress.style.width = '100%';
        progress.style.display = 'block';
        parent.appendChild(progress);

        // Create canvas
        var canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        parent.appendChild(canvas);

        var ctx = canvas.getContext("2d", { alpha: false });
        ctx.imageSmoothingQuality = "low";

        // Set the size of the canvas to match the parent div
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        canvas.classList.add('canvas')

        var len = 0;

        function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
            ctx.beginPath();
            ctx.save();
            ctx.strokeStyle = color1;
            ctx.fillStyle = color2;
            ctx.lineWidth = branchWidth;
            ctx.translate(startX, startY);
            ctx.rotate(angle * Math.PI/180);
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -len);
            ctx.stroke();

            if(len < 10) {
                ctx.beginPath();
                ctx.arc(0, -len, 10, 0, Math.PI/2);
                ctx.fill();
            } else {
                drawTree(0, -len, len*0.8, angle+15, Math.max(branchWidth*0.8, 1));
                drawTree(0, -len, len*0.8, angle-15, Math.max(branchWidth*0.8, 1));
            }

            ctx.restore();
        }

        function animate() {
            // Draw sky
            ctx.fillStyle = 'skyblue';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw ground
            ctx.fillStyle = 'saddlebrown';
            ctx.fillRect(0, canvas.height-80, canvas.width, 80);

            len += .7;
            var branchWidth = Math.max(len/6, 2); // Set a minimum branch width
            if (len < 120 && len < canvas.height - 100) { // Stop the tree from growing beyond the canvas
                drawTree(canvas.width/2, canvas.height-80, len, 0, branchWidth, 'brown', 'green');
                progress.value = len;
                requestAnimationFrame(animate);
            }
        }

        animate();

        // Resize the canvas when the window is resized
        window.addEventListener('resize', function() {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            len = 0; // Reset the tree
            animate();
        });
    canvasContainer.appendChild(parent)


        console.log(canvasContainer)


        document.body.appendChild(mainModuleContainer);
    });


































    document.body.appendChild(startButtonContainer);
})();