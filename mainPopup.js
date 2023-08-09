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
      logoHeader.innerHTML = `<svg width="156" height="55" viewBox="0 0 156 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_262_432)">
<path d="M35.3768 21.2157C32.9671 20.0055 29.3501 19.9603 28.8063 19.9603H28.7764C28.3723 19.9603 21.3927 20.126 20.804 20.2013C19.2075 20.4072 18.3295 20.8943 18.1249 21.6877C18.0102 22.1396 18.08 22.8326 19.0778 23.5707C19.8062 24.108 21.248 24.0829 23.957 23.9875C26.8905 23.882 30.9116 23.7414 32.573 25.0119C34.379 26.3978 34.2792 28.3461 34.2193 29.5061C34.2143 29.6266 34.2093 29.7371 34.2044 29.8325C34.0597 34.2664 28.8262 39.0167 22.0013 39.0167C12.5572 39.0167 7.4136 29.9128 7.4136 21.1102C7.4136 12.3076 12.8965 5.75962 20.7491 5.75962C26.4914 5.75962 31.5851 8.20004 32.6029 11.4439C33.2565 13.5278 33.9399 15.2552 35.726 15.2552C37.512 15.2552 38.3452 13.8391 38.3452 11.0472C38.3452 6.78901 37.1578 2.49065 34.4987 2.49065C33.4959 2.49065 32.7675 3.14344 32.4283 4.29335C29.2353 2.12408 24.9897 0.848633 20.809 0.848633C9.13979 0.853654 0 10.4547 0 22.702C0 34.9493 9.16473 44.2692 21.3129 44.2692C30.757 44.2692 36.634 40.4277 38.7743 32.8654C38.894 32.4637 39.2033 30.4602 39.2233 29.953C39.4278 25.7952 37.991 22.5313 35.3718 21.2157H35.3768Z" fill="#2A492D"/>
<path d="M53.5108 39.3883C53.0817 38.861 53.0817 35.3059 53.0817 33.7643V13.1411C53.0817 10.7158 53.1217 8.5666 53.1566 6.83922C53.1815 5.60394 53.2015 4.54944 53.2015 3.70583C53.2015 1.91317 53.0069 0 50.6771 0C48.911 0 44.6704 0.984205 42.4104 2.09395C41.7967 2.40528 40.9785 2.94257 40.9785 4.05734C40.9785 5.67424 43.1986 6.05085 45.2042 6.17639C45.3538 6.42746 45.723 7.51712 45.723 12.0917V33.7592C45.723 35.9837 45.723 39.0016 45.3239 39.3783C43.5079 39.4837 41.6121 39.7599 41.6121 41.5023C41.6121 43.8423 45.5484 44.1587 49.4049 44.1587C53.2614 44.1587 57.1976 43.8423 57.1976 41.5023C57.1976 39.7147 55.1921 39.5138 53.5208 39.3833L53.5108 39.3883Z" fill="#2A492D"/>
<path d="M85.4303 33.3174C84.7019 33.3174 84.168 33.8044 83.6043 34.3216L83.4596 34.4572C81.8033 36.1244 79.4036 38.0375 75.5371 38.0375C70.3436 38.0375 66.8613 34.4874 66.3524 28.7328H82.9457C85.3953 28.7328 86.9768 26.8196 86.9768 23.862C86.9768 18.6045 82.3521 13.1663 74.6142 13.1663C65.9833 13.1663 59.4727 20.2164 59.4727 29.5714C59.4727 38.9263 65.2948 44.7512 73.6313 44.7512C80.1519 44.7512 83.8438 41.1609 85.111 39.6394C86.3682 38.2585 87.1514 36.6114 87.1514 35.341C87.1514 33.8547 86.2634 33.3224 85.4352 33.3224L85.4303 33.3174ZM74.26 17.2537C77.1885 17.2537 80.3016 19.1418 80.3016 22.6367C80.3016 23.7013 79.9025 24.4043 77.9668 24.4043L66.572 24.5147C67.3901 20.0205 70.2987 17.2537 74.26 17.2537Z" fill="#2A492D"/>
<path d="M119.521 39.5038C116.413 38.8259 116.268 37.0684 116.268 33.7643V22.8125C116.268 16.6813 112.691 13.1663 106.45 13.1663C100.208 13.1663 92.1212 17.4245 92.1212 20.8893C92.1212 22.4961 93.3784 23.6611 95.1096 23.6611C97.0803 23.6611 98.2277 22.4459 99.3153 21.0901C101.451 18.484 103.137 17.3692 104.948 17.3692C108.425 17.3692 108.904 20.598 108.904 24.0879V26.7644C106.694 26.2321 104.733 25.971 102.922 25.971C95.2493 25.971 90.0957 29.9178 90.0957 35.7929C90.0957 41.0253 94.1567 44.6809 99.9689 44.6809C103.885 44.6809 107.203 43.0339 109.413 40.016C110.71 43.4557 113.225 44.2189 115.185 44.2189C118.568 44.2189 120.374 42.0999 120.374 40.5734C120.374 39.8051 119.895 39.5641 119.516 39.4988L119.521 39.5038ZM109.019 31.1732V32.5993C109.019 36.4658 106.05 39.6092 102.398 39.6092C99.5099 39.6092 97.5742 37.7262 97.5742 34.9292C97.5742 31.9264 99.9838 30.1287 104.02 30.1287C105.956 30.1287 107.817 30.6459 109.019 31.1732Z" fill="#2A492D"/>
<path d="M143.697 13.1612C139.521 13.1612 135.589 15.3355 133.349 18.73L133.374 17.3341C133.374 15.4109 133.07 13.6282 130.85 13.6282C129.263 13.6282 124.943 14.5622 122.803 15.6669C121.82 16.1942 121.381 16.7968 121.381 17.6253C121.381 19.2472 123.476 19.6188 125.372 19.7444C125.542 20.0005 125.951 21.0801 125.951 25.6044V44.5955C125.951 46.2878 125.951 49.7777 125.547 50.2196C123.596 50.3752 121.725 50.6916 121.725 52.3989C121.725 54.2217 124.09 55 129.633 55C135.175 55 138.752 54.5732 138.752 52.3989C138.752 50.6665 136.912 50.4305 133.893 50.2146C133.314 49.7174 133.314 45.881 133.314 44.5905V41.894C135.589 43.6766 138.578 44.6859 141.671 44.6859C149.973 44.6859 155.999 37.8367 155.999 28.3963C155.999 18.956 150.94 13.1562 143.697 13.1562V13.1612ZM148.231 29.5663C148.231 36.3001 145.273 40.483 140.514 40.483C135.754 40.483 133.14 36.7571 133.14 30.2693C133.14 24.4595 135.564 18.5995 140.973 18.5995C145.378 18.5995 148.226 22.9079 148.226 29.5714L148.231 29.5663Z" fill="#2A492D"/>
<path d="M24.367 10.4195C24.367 10.4195 22.6259 12.7344 24.2174 16.6562C25.8089 20.5779 29.0168 20.2063 29.0168 20.2063C29.0168 20.2063 30.0694 17.1332 28.5777 14.4819C27.086 11.8306 24.372 10.4195 24.372 10.4195H24.367Z" fill="#6DDB5D"/>
<path d="M15.0507 32.7901C15.0507 32.7901 18.2686 33.2019 21.1672 29.4458C24.0658 25.6898 21.9156 22.7522 21.9156 22.7522C21.9156 22.7522 18.3534 23.4402 16.6223 26.3928C14.8911 29.3404 15.0507 32.7951 15.0507 32.7951V32.7901Z" fill="#6DDB5D"/>
<path d="M26.1117 30.7263C26.1117 30.7263 27.0047 27.3619 25.9172 25.3483C24.6749 23.0485 21.7963 22.7522 21.7963 22.7522C21.7963 22.7522 20.8334 25.75 22.1804 27.8641C23.5274 29.9781 26.1117 30.7313 26.1117 30.7313V30.7263Z" fill="#6DDB5D"/>
</g>
<defs>
<clipPath id="clip0_262_432">
<rect width="156" height="55" fill="white"/>
</clipPath>
</defs>
</svg>`;
      logoHeader.classList.add('logoHeader')
      mainModuleContainer.appendChild(logoHeader)

      const defaultModule = document.createElement('div');
      defaultModule.classList.add('defaultContainer')
      const moduleImg = document.createElement('img');
      //moduleImg
      moduleImg.src = "https://previews.dropbox.com/p/thumb/AB8lMpBlfLni_AsqMyteXv3QyPPd_iIwsV27_Ma_Y1vn_-oE3hTxyqs2PXiZEyJ3dtDzOEzbcIc23i6mZZmM2hl8WelIrJwdf26tahIc-95JIV3VkGiiv48fD4zmFnBNZaNNkvNmvksYPlaqWxUK2AG1WKXzgW6qEyV_5P3b9jZ1eJMGeyGmFMr-BKhot3QHRPVspruhdtzkw8NV22pg4iVxqPKYJ-Rsl7FCAUj0mCgLWhQjiTNx-3Jtdrgyskzf7jA-8RQ0ENlYw5ryh2tDRDdi1GcPE3UtNg6F2UvniqI0stMnFrYCdWv3jrRBkYuufau2SXgOd_W4RWb8TEKrdub4/p.png"
      moduleImg.classList.add('moduleImg')
      mainModuleContainer.appendChild(defaultModule)
      defaultModule.appendChild(moduleImg)



      const runTreeAnimation = document.createElement('button');
      mainModuleContainer.appendChild(runTreeAnimation)
      runTreeAnimation.textContent = "Show End Screen";
      runTreeAnimation.classList.add('animateButton')

      runTreeAnimation.addEventListener('click', function(){

          mainModuleContainer.removeChild(defaultModule)
          mainModuleContainer.removeChild(runTreeAnimation)
          const congrats = document.createElement('h2');
          congrats.textContent = "Congrats"
          congrats.classList.add('congrats')
          mainModuleContainer.appendChild(congrats)

          const description = document.createElement('p');
          description.textContent = "You are now 2 eco purchases away from planting a new tree!"
          mainModuleContainer.appendChild(description)
          description.classList.add('description')

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
          ctx.fillStyle = '#F1f9e4';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw ground
          ctx.fillStyle = '#3A2819';
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

      })




      //Making the canvas display and map
      //Container
      const treesContainerContainer = document.createElement('div');
      const treeConatiner = document.createElement('div');
      const selectionConatiner = document.createElement('div');
      const canvasTitle = document.createElement('h2')
      canvasTitle.textConent = "Current Tree Progress / Tree Map";

      //mainModuleContainer.appendChild(treesContainerContainer)
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
          ctx.fillStyle = '#F1f9e4';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Draw ground
          ctx.fillStyle = '#3A2819';
          ctx.fillRect(0, canvas.height-80, canvas.width, 80);

          len += 3;
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
          //len = 0; // Reset the tree
          animate();
      });
  canvasContainer.appendChild(parent)

      


      console.log(canvasContainer)


      document.body.appendChild(mainModuleContainer);
  });























var video = document.createElement('video');
      video.width = 640;
      video.height = 860;
  //video.style.display = "fixed";
  //video.style.top = "50%"
  video.autoplay = true;
  console.log(video)
      video.preload = 'auto';
      var source = document.createElement('source');
      source.src = 'https://cdn.glitch.global/88d13206-8af8-4bf3-ab7f-8d17cbe09c12/%E6%9C%AA%E5%91%BD%E5%90%8D%E4%BD%9C%E5%93%81.mp4?v=1691010339106'; // Make sure to point to the correct path
      source.type = 'video/mp4';
      video.appendChild(source);
      // Create canvas element
      var canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 860;
      document.body.appendChild(video);
      var context = canvas.getContext('2d');
      // Draw the video frame to canvas when the video is playing
      video.addEventListener('play', function() {
          function draw() {
              if (video.paused || video.ended) return;
              // Draw the current frame
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              // Wait for the next frame
              requestAnimationFrame(draw);
          }
          draw();
      }, false);
      // Start playing the video
      video.play();
















  document.body.appendChild(startButtonContainer);
})();