// ==UserScript==
// @name         Grade PopuP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.amazon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==


const grades = [{grade:"A", color:"#20EF55"}, {grade:"B", color: "#03D0FF"}, {grade:"C", color:"#FFEE1D"},{grade:"D", color:"#FF8E39"},{grade:"F", color:"#FF4343"}]
const getRandomGrade = ()=> {
    let randomNum = Math.floor(Math.random() * grades.length)
    return grades[randomNum]
}
const reasons = ['Climate Policies', 'Sustainability Licenses', 'Enviornmental Impact', 'Climate Change Initiatives']
const getRandomReason = () => {
    let randomNum = Math.floor(Math.random() * reasons.length)
    return reasons[randomNum]
}
const getRandomNumber = () => {
    let num = Math.floor(Math.random() * 3000)
    if(num > 300){
        getRandomNumber()
    }
    console.log(num)
    return num;
}
(function() {
    'use strict';

    function addPlusSigns() {
        // Get all items. This may change if Amazon updates their HTML.
        const items = document.querySelectorAll('.s-card-container');

        items.forEach((item) => {
            // Make sure we only add one plus sign.
            if (!item.querySelector('.plus-sign')) {
                const plus = document.createElement('div');
                plus.innerHTML = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
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
</svg>`
                    //'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="30px" height="30px"><path fill="#D6E5E5" d="M389.2,204.5l-0.1-7.2c-29-0.9-57.8,0.8-86.7,2.5c-0.1-0.8-0.2-1.5-0.4-2.3h-0.4c0-0.9,0-1.7,0-2.6c-0.1-0.4-0.1-0.8-0.2-1.2c0-1.3-0.1-2.6-0.2-3.9c0.1,0,0.3,0,0.4,0c0-23.1,0.2-46.2,0.2-69.3c-20.9-0.1-41.8-1-62.8-1h-39.6c-0.1,0.7-0.2,1.5-0.2,2.2c-0.2,3.7-0.2,7.3-0.1,11c0.1,7,0.4,14,0.6,21c0.4,13.2,0.9,26.4,1.4,39.6h0l0,0c0,1.4,0.1,2.8,0.1,4.1h-0.7l-0.8,5.8c-27.6,0.3-55.2,0.2-82.8,0.4c0,20.9-0.6,41.8-0.5,62.8L117,306c0.7,0.1,1.5,0.1,2.2,0.2c3.7,0.1,7.3,0.1,11,0c7-0.1,14-0.5,21-0.7c16.3-0.6,33.8-1.4,50.1-2l-0.3,2h0.1c0,2.1,0,4.3-0.1,6.4c-0.2,26-0.7,52.1,1.5,78c17.6,1.7,35.9,1.4,53.4,0.4c13.9-0.8,29.7-3.4,43,2.2h7.2c1.1-29.1-0.4-58-1.8-87h0.6v-2.4c1.5,0,2.9,0,4.4,0c26,0,52.1,0.3,78-2.1c1.5-17.6,1.1-35.9,0-53.4C386.5,233.6,383.7,217.8,389.2,204.5z"/><path fill="#71C598" d="M474.2,161.7c-16.1-46.6-46.7-87.1-91.3-109.6C332,26.5,272,24.1,216.5,32.9C166.8,40.8,114.3,58.8,77,94c-19.6,18.5-34.7,40.9-42.7,66.8c-8,26-10.4,53.1-12.1,80.1c-0.1,1.1-0.4,2-1,2.7c0,0.2,0.1,0.5,0.1,0.8c0,52.9-1.1,108.3,30.1,153.9c25.3,37.1,64.5,61.5,107.2,73.7c88,25.2,194.2,9.6,264.9-50.8C497.6,357.9,504.4,248.9,474.2,161.7z M397.6,251.9c0.3,18.2,1.2,36.4-0.6,54.6c-0.2,2.2-2.4,3.8-4.5,4.1c-25.7,2.7-51.7,2.6-77.6,2.6c1.4,28,2.5,56,1.2,84c-0.1,2.5-1.6,5.4-4.6,5.4h-15c-1.7,0-3.1-0.7-4-1.8c-12.7-4.1-28-0.3-40.8-0.2c-18.2,0.1-36.4,0.9-54.6-1.1c-2.2-0.2-3.8-2.4-4-4.5c-2.6-27-2.2-54.2-1.9-81.3c-14.8,0.6-29.6,1.5-44.4,2.1c-7.9,0.3-15.9,0.7-23.9,0.6c-4.1-0.1-12.4,0.7-14.9-3.7c-0.2-0.4-0.4-0.7-0.5-1.1c-0.2-0.6-0.4-1.2-0.4-1.9l-0.3-42.2c-0.2-22.4,0.6-44.8,0.5-67.2c0-0.5,0.1-0.9,0.2-1.3c-0.2-2.5,1.2-5,4.4-5.1c26.1-0.2,53.4-0.1,79.8-0.3c-0.5-14.8-1.2-29.6-1.7-44.3c-0.3-7.9-0.6-15.9-0.4-23.9c0.1-4.1-0.6-12.4,3.8-14.8c0.4-0.2,0.7-0.4,1.1-0.5c0.6-0.2,1.2-0.4,1.9-0.4h42.2c22.4,0,44.8,1,67.2,1c0.5,0,0.9,0.1,1.3,0.2c2.5-0.2,5,1.2,5,4.4c0,24.7-0.2,49.4-0.3,74.1c27.3-1.5,54.6-2.8,82-1.7c2.5,0.1,5.4,1.6,5.4,4.6l0.1,13.5c0,0,0,0,0,0.1l0,1.5c0,1.7-0.7,3.1-1.8,4C393.4,223.8,397.4,239,397.6,251.9z"/><path d="M487.9,168.7c-14.2-46.9-40.9-88.3-82-115.7c-46.4-31-105.3-38.4-159.8-34.4c-51.7,3.8-104.6,17.9-148.6,46c-21.6,13.8-40.9,31.9-55,53.4C27.7,140.5,20,166.6,16,193.2c-2.3,15.1-3.4,30.3-4.4,45.6c-0.1,0.9,0.1,1.8,0.4,2.6c-0.9,0.9-1.5,2.2-1.5,3.8c0,30.1-0.6,60.4,4.6,90.2c4.8,27.1,15.2,52.9,31.6,75.1c29.2,39.5,73.5,63.3,120.4,75c88.9,22.2,194.2,3.7,264.5-57.1C505.6,364.4,514.8,257.6,487.9,168.7z M423.5,421.2c-70.8,60.4-176.9,76-264.9,50.8c-42.7-12.2-81.9-36.6-107.2-73.7c-31.1-45.6-30.1-101-30.1-153.9c0-0.3,0-0.5-0.1-0.8c0.5-0.7,0.9-1.6,1-2.7c1.7-27,4.1-54.1,12.1-80.1C42.2,134.9,57.4,112.4,77,94c37.3-35.2,89.8-53.2,139.6-61.1C272,24.1,332,26.5,383,52.1c44.6,22.5,75.1,63.1,91.3,109.6C504.4,248.9,497.6,357.9,423.5,421.2z"/><path d="M397.4,211.1c1.1-0.9,1.8-2.2,1.8-4l0-1.5c0,0,0,0,0-0.1l-0.1-13.5c0-3-2.9-4.5-5.4-4.6c-27.4-1.1-54.7,0.1-82,1.7c0-24.7,0.3-49.4,0.3-74.1c0-3.2-2.5-4.6-5-4.4c-0.4-0.1-0.9-0.2-1.3-0.2c-22.4,0-44.8-1-67.2-1h-42.2c-0.7,0-1.4,0.1-1.9,0.4c-0.4,0.1-0.7,0.3-1.1,0.5c-4.4,2.5-3.7,10.7-3.8,14.8c-0.2,8,0.1,15.9,0.4,23.9c0.5,14.8,1.3,29.5,1.7,44.3c-26.4,0.2-53.6,0.1-79.8,0.3c-3.2,0-4.6,2.6-4.4,5.1c-0.1,0.4-0.2,0.9-0.2,1.3c0.1,22.4-0.7,44.8-0.5,67.2l0.3,42.2c0,0.7,0.1,1.4,0.4,1.9c0.1,0.4,0.3,0.7,0.5,1.1c2.5,4.4,10.8,3.6,14.9,3.7c8,0.2,15.9-0.2,23.9-0.6c14.8-0.6,29.6-1.5,44.4-2.1c-0.3,27.1-0.7,54.4,1.9,81.3c0.2,2.1,1.8,4.3,4,4.5c18.1,2,36.4,1.2,54.6,1.1c12.9-0.1,28.2-3.9,40.8,0.2c0.9,1.1,2.2,1.8,4,1.8h15c3,0,4.5-2.8,4.6-5.4c1.4-28.1,0.2-56-1.2-84c25.9,0.1,51.9,0.1,77.6-2.6c2.1-0.2,4.3-1.8,4.5-4.1c1.9-18.1,0.9-36.4,0.6-54.6C397.4,239,393.4,223.8,397.4,211.1z M387.4,247.5c1.1,17.6,1.6,35.8,0,53.4c-25.9,2.4-52,2.1-78,2.1c-1.5,0-2.9,0-4.4,0v2.4h-0.6c1.5,29,2.9,58,1.8,87H299c-13.3-5.6-29.1-3-43-2.2c-17.6,1-35.8,1.3-53.4-0.4c-2.2-25.9-1.7-52-1.5-78c0-2.1,0-4.3,0.1-6.4H201l0.3-2c-16.3,0.6-33.8,1.4-50.1,2c-7,0.2-14,0.6-21,0.7c-3.7,0.1-7.3,0.1-11,0c-0.7,0-1.5-0.1-2.2-0.2l-0.3-39.6c-0.2-20.9,0.5-41.9,0.5-62.8c27.6-0.2,55.2-0.1,82.8-0.4l0.8-5.8h0.7c0-1.4-0.1-2.8-0.1-4.1l0,0h0c-0.4-13.2-1-26.4-1.4-39.6c-0.2-7-0.5-14-0.6-21c0-3.7,0-7.3,0.1-11c0-0.7,0.1-1.5,0.2-2.2h39.6c20.9,0,41.8,0.8,62.8,1c0,23.1-0.2,46.2-0.2,69.3c-0.1,0-0.3,0-0.4,0c0.1,1.3,0.2,2.6,0.2,3.9c0,0.4,0.1,0.8,0.2,1.2c0,0.9,0,1.7,0,2.6h0.4c0.1,0.8,0.2,1.5,0.4,2.3c28.9-1.7,57.7-3.3,86.7-2.5l0.1,7.2C383.7,217.8,386.5,233.6,387.4,247.5z"/></svg>';
                plus.className = 'plus-sign';
                plus.style.fontSize = '20px';
                plus.style.color = 'red';
                plus.style.zIndex = '9999';
                plus.classList.add('plus')

                plus.addEventListener('click', function() {
                       //disables button from being clicked multiple times but doesn't seem to work
                       plus.disabled = "true";
                       //This is the code for the initial popup div
                       const popup = document.createElement('div');
                       popup.style.position = 'fixed';
                       popup.style.top = '50%';
                       popup.style.left = '50%';
                       popup.style.width = "40%";
                       popup.style.height = "50%";
                       popup.style.transform = 'translate(-50%, -50%)';
                       popup.style.padding = '20px';
                       popup.style.background = 'white';
                       popup.style.border = '2px solid #333';
                       popup.style.borderRadius = '5px';
                       popup.classList.add("popUp");
                       //popup.textContent = `This is a pop-up for .`;

                       //This is making a div for the grade and reason inside popup
                       const ratingContainer = document.createElement('div');
                       const gradeContainer = document.createElement('h3');
                       const grade = getRandomGrade()
                       gradeContainer.textContent = grade.grade;
                       gradeContainer.style.backgroundColor = grade.color;

                       const reasonContainer = document.createElement('p');
                       const reason = getRandomReason();
                       reasonContainer.textContent = `Reason For Grade: ${reason}`;

                       //Appending the ratingContainer and it's kids to our popup
                       popup.appendChild(ratingContainer)
                       ratingContainer.appendChild(gradeContainer)
                       ratingContainer.appendChild(reasonContainer)

                       //Making the suggstions div the title/text and the 3 alternatives
                       const suggestionsContainer = document.createElement('div');
                       const suggestionTitle = document.createElement('h4');
                       suggestionTitle.textContent = "Eco-friendly alternatives";
                       const suggestionP = document.createElement('p');
                       var userChooseAlt = getRandomNumber()
                       suggestionP.textContent = `${userChooseAlt} users chose an eco-friendly alternative`;
                       //This is the product container and products and appending them
                       const productContainer = document.createElement('div');
                       const altProductA = document.createElement('div');
                       altProductA.textContent = "Product A";
                       const altProductB = document.createElement('div');
                       altProductB.textContent = "Product B";
                       const altProductC = document.createElement('div');
                       altProductC.textContent = "Product C";
                       //Appending the products to their container
                       productContainer.appendChild(altProductA)
                       productContainer.appendChild(altProductB)
                       productContainer.appendChild(altProductC)

                       productContainer.classList.add("products");

                       //Appending the suggestion container and insides to popup
                       suggestionsContainer.appendChild(suggestionTitle)
                       suggestionsContainer.appendChild(suggestionP)
                       suggestionsContainer.appendChild(productContainer)
                       suggestionsContainer.classList.add('suggestions')

                       if(grade.grade == "A"){

                       } else {
                          popup.appendChild(suggestionsContainer)
                       }



                       //Button that allows user to close popup
                       const exitButton = document.createElement('button');
                       const exitButtonContainer = document.createElement('div');
                       exitButton.textContent = "close window";
                       exitButtonContainer.classList.add("button");

                       popup.appendChild(exitButtonContainer)
                       exitButtonContainer.appendChild(exitButton);







                       document.body.appendChild(popup);
                       console.log("popup",popup)

                       document.body.appendChild(popup);
                       exitButton.addEventListener('click', function() {
                           document.body.removeChild(popup);
                       });

                   })



                   item.appendChild(plus);
            }
        });
    }

    // Run our function every second to account for dynamically loaded content.
    setInterval(addPlusSigns, 1000);
})();