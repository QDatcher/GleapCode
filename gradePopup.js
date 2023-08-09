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

const getEcoFriendlies = ()=> {
  let ecoFriendlies = [];
  const items = document.querySelectorAll(".a-size-base")

  const imgs = document.querySelectorAll("img")
  console.log(imgs)

  imgs.forEach((img)=>{
      if(img.src == "https://m.media-amazon.com/images/I/216-OX9rBaL._SS200_.png"){
          var rootNode = img.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
          var EcoImageContainer = rootNode.childNodes[0]
console.log(EcoImageContainer)
          if(EcoImageContainer.nodeName !== "#text"){
              var checkForBestSell = EcoImageContainer.childNodes[0].childNodes[0]
              if(checkForBestSell.href == "https://www.amazon.com/gp/bestsellers/industrial/3310292011/ref=sr_bs_1_3310292011_1" || checkForBestSell.href == "https://www.amazon.com/gp/bestsellers/industrial/3310292011/ref=sr_bs_6_3310292011_1" || checkForBestSell.href == "https://www.amazon.com/gp/bestsellers/industrial/3310292011/ref=sr_bs_7_3310292011_1"){
                  let BestPrice = EcoImageContainer.childNodes[2].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
                  let BestTitle = '';
                  const BestATag = EcoImageContainer.childNodes[1].childNodes[0].childNodes[0]
                  const BestImgTag = BestATag.childNodes[0].childNodes[0]
                  //console.log(EcoImageContainer.childNodes[2])
                  //console.log(EcoImageContainer.childNodes[2].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent)


                  //console.log('Best', EcoImageContainer)
                  //console.log(EcoImageContainer.childNodes[2].childNodes[0].childNodes[0].nodeName)
                  //console.log(EcoImageContainer.childNodes[2].childNodes[0].childNodes[0].nodeName == "H2")



                  if (EcoImageContainer.childNodes[2].childNodes[0].childNodes[0].nodeName == "H2"){
                      BestTitle = EcoImageContainer.childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent;
                  } else {
                      BestTitle = EcoImageContainer.childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                      //console.log("Best title 2nd child", BestTitle)
                  }


                  //console.log('title', EcoImageContainer.childNodes[2].childNodes[0].childNodes[0])


                  if(BestATag.href && BestImgTag.src){
                      var bestEcoFriend = {imgSrc: BestImgTag.src, aHref: BestATag.href, title: BestTitle, price: BestPrice};
                      ecoFriendlies.push(bestEcoFriend);
                  }
              } else {
                  //console.log(EcoImageContainer.childNodes[1])
                  //console.log(EcoImageContainer.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeName)
                  if(EcoImageContainer.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeName == "SPAN"){
                      var regPrice = EcoImageContainer.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent || "click to see";
                      var aTag = EcoImageContainer.childNodes[0].childNodes[0].childNodes[0];
                      var imgTag = aTag.childNodes[0].childNodes[0];
                      var regTitle = '';
                      //console.log("title card",EcoImageContainer.childNodes[1].childNodes[0])

                      //console.log(EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].nodeName)
                      //console.log(EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].nodeName == "H2")
                      if (EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].nodeName == "H2"){

                          //console.log("regTitle title", EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent)
                          regTitle = EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent

                      } else {
                          regTitle = EcoImageContainer.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0].textContent;
                          //console.log("regTitle title 2nd child", regTitle)
                      }


                      //console.log('ecoTitle',EcoImageContainer.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].textContent)


                      if(imgTag.src && aTag.href && regTitle && regPrice){
                          var ecoFriend = {imgSrc: imgTag.src, aHref: aTag.href, title: regTitle, price: regPrice};
                          ecoFriendlies.push(ecoFriend);
                      }

                  }
              }

          }
      }
  })
  console.log("ecofriend",ecoFriendlies)
  return(ecoFriendlies)
}




const grades = [{grade:"A", color:"#6edd57"}, {grade:"B", color: "#5fc1ed"}, {grade:"C", color:"#edc500"},{grade:"D", color:"#ef84a5"},{grade:"F", color:"#ef6660"}]
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

 //const alternatives = getEcoFriendlies()

  function addPlusSigns() {
      // Get all items. This may change if Amazon updates their HTML.
      const items = document.querySelectorAll('.s-product-image-container');

      items.forEach((item) => {
          // Make sure we only add one plus sign.
          if (!item.querySelector('.plus-sign')) {
              const plus = document.createElement('div');
              plus.innerHTML = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="23" fill="#AEEFA3"/>
<g clip-path="url(#clip0_262_191)">
<path d="M32.3987 20.9459C30.8862 20.1725 28.6111 20.1422 28.2678 20.1422H28.2481C27.9949 20.1422 23.608 20.2488 23.238 20.2978C22.2334 20.4288 21.6833 20.7399 21.5553 21.2483C21.4821 21.5364 21.5271 21.9799 22.1561 22.4523C22.6133 22.7965 23.5208 22.7807 25.2218 22.7188C27.0663 22.6511 29.5918 22.5604 30.6386 23.3755C31.7754 24.2598 31.7121 25.5056 31.6741 26.2502C31.6699 26.3265 31.667 26.3971 31.6642 26.4604C31.5742 29.2962 28.2833 32.3308 23.9949 32.3308C18.059 32.3308 14.8272 26.5109 14.8272 20.8839C14.8272 15.257 18.2715 11.0718 23.2084 11.0718C26.8173 11.0718 30.0209 12.633 30.6583 14.704C31.0691 16.0376 31.4996 17.1408 32.6195 17.1408C33.7395 17.1408 34.2657 16.2364 34.2657 14.452C34.2657 11.73 33.5186 8.98348 31.8471 8.98348C31.2154 8.98348 30.7581 9.40114 30.5471 10.1342C28.5408 8.74728 25.8718 7.93356 23.245 7.93356C15.9106 7.93356 10.166 14.0674 10.166 21.8993C10.166 29.7312 15.9247 35.6836 23.5616 35.6836C29.4975 35.6836 33.1908 33.228 34.5358 28.3932C34.6118 28.1369 34.8059 26.8579 34.82 26.5325C34.9495 23.8753 34.0448 21.787 32.3987 20.9459Z" fill="#2A492D"/>
<path d="M26.4128 14.3483C26.4128 14.3483 25.3168 15.8274 26.3185 18.3333C27.3189 20.8393 29.3336 20.6031 29.3336 20.6031C29.3336 20.6031 29.9949 18.6401 29.0578 16.9435C28.1208 15.247 26.4128 14.3468 26.4128 14.3468V14.3483Z" fill="#128B00"/>
<path d="M20.561 28.6481C20.561 28.6481 22.5828 28.9102 24.4048 26.5094C26.2282 24.1071 24.8747 22.2319 24.8747 22.2319C24.8747 22.2319 22.6363 22.6726 21.5487 24.5579C20.4611 26.4431 20.561 28.6495 20.561 28.6495V28.6481Z" fill="#128B00"/>
<path d="M27.5112 27.3288C27.5112 27.3288 28.0712 25.1771 27.3888 23.8895C26.6094 22.4205 24.7972 22.2304 24.7972 22.2304C24.7972 22.2304 24.1922 24.1459 25.0392 25.4968C25.8876 26.8477 27.5112 27.3273 27.5112 27.3273V27.3288Z" fill="#128B00"/>
</g>
<defs>
<clipPath id="clip0_262_191">
<rect width="24.6667" height="27.75" fill="white" transform="translate(10.166 7.93333)"/>
</clipPath>
</defs>
</svg>
`
                  //'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" width="30px" height="30px"><path fill="#D6E5E5" d="M389.2,204.5l-0.1-7.2c-29-0.9-57.8,0.8-86.7,2.5c-0.1-0.8-0.2-1.5-0.4-2.3h-0.4c0-0.9,0-1.7,0-2.6c-0.1-0.4-0.1-0.8-0.2-1.2c0-1.3-0.1-2.6-0.2-3.9c0.1,0,0.3,0,0.4,0c0-23.1,0.2-46.2,0.2-69.3c-20.9-0.1-41.8-1-62.8-1h-39.6c-0.1,0.7-0.2,1.5-0.2,2.2c-0.2,3.7-0.2,7.3-0.1,11c0.1,7,0.4,14,0.6,21c0.4,13.2,0.9,26.4,1.4,39.6h0l0,0c0,1.4,0.1,2.8,0.1,4.1h-0.7l-0.8,5.8c-27.6,0.3-55.2,0.2-82.8,0.4c0,20.9-0.6,41.8-0.5,62.8L117,306c0.7,0.1,1.5,0.1,2.2,0.2c3.7,0.1,7.3,0.1,11,0c7-0.1,14-0.5,21-0.7c16.3-0.6,33.8-1.4,50.1-2l-0.3,2h0.1c0,2.1,0,4.3-0.1,6.4c-0.2,26-0.7,52.1,1.5,78c17.6,1.7,35.9,1.4,53.4,0.4c13.9-0.8,29.7-3.4,43,2.2h7.2c1.1-29.1-0.4-58-1.8-87h0.6v-2.4c1.5,0,2.9,0,4.4,0c26,0,52.1,0.3,78-2.1c1.5-17.6,1.1-35.9,0-53.4C386.5,233.6,383.7,217.8,389.2,204.5z"/><path fill="#71C598" d="M474.2,161.7c-16.1-46.6-46.7-87.1-91.3-109.6C332,26.5,272,24.1,216.5,32.9C166.8,40.8,114.3,58.8,77,94c-19.6,18.5-34.7,40.9-42.7,66.8c-8,26-10.4,53.1-12.1,80.1c-0.1,1.1-0.4,2-1,2.7c0,0.2,0.1,0.5,0.1,0.8c0,52.9-1.1,108.3,30.1,153.9c25.3,37.1,64.5,61.5,107.2,73.7c88,25.2,194.2,9.6,264.9-50.8C497.6,357.9,504.4,248.9,474.2,161.7z M397.6,251.9c0.3,18.2,1.2,36.4-0.6,54.6c-0.2,2.2-2.4,3.8-4.5,4.1c-25.7,2.7-51.7,2.6-77.6,2.6c1.4,28,2.5,56,1.2,84c-0.1,2.5-1.6,5.4-4.6,5.4h-15c-1.7,0-3.1-0.7-4-1.8c-12.7-4.1-28-0.3-40.8-0.2c-18.2,0.1-36.4,0.9-54.6-1.1c-2.2-0.2-3.8-2.4-4-4.5c-2.6-27-2.2-54.2-1.9-81.3c-14.8,0.6-29.6,1.5-44.4,2.1c-7.9,0.3-15.9,0.7-23.9,0.6c-4.1-0.1-12.4,0.7-14.9-3.7c-0.2-0.4-0.4-0.7-0.5-1.1c-0.2-0.6-0.4-1.2-0.4-1.9l-0.3-42.2c-0.2-22.4,0.6-44.8,0.5-67.2c0-0.5,0.1-0.9,0.2-1.3c-0.2-2.5,1.2-5,4.4-5.1c26.1-0.2,53.4-0.1,79.8-0.3c-0.5-14.8-1.2-29.6-1.7-44.3c-0.3-7.9-0.6-15.9-0.4-23.9c0.1-4.1-0.6-12.4,3.8-14.8c0.4-0.2,0.7-0.4,1.1-0.5c0.6-0.2,1.2-0.4,1.9-0.4h42.2c22.4,0,44.8,1,67.2,1c0.5,0,0.9,0.1,1.3,0.2c2.5-0.2,5,1.2,5,4.4c0,24.7-0.2,49.4-0.3,74.1c27.3-1.5,54.6-2.8,82-1.7c2.5,0.1,5.4,1.6,5.4,4.6l0.1,13.5c0,0,0,0,0,0.1l0,1.5c0,1.7-0.7,3.1-1.8,4C393.4,223.8,397.4,239,397.6,251.9z"/><path d="M487.9,168.7c-14.2-46.9-40.9-88.3-82-115.7c-46.4-31-105.3-38.4-159.8-34.4c-51.7,3.8-104.6,17.9-148.6,46c-21.6,13.8-40.9,31.9-55,53.4C27.7,140.5,20,166.6,16,193.2c-2.3,15.1-3.4,30.3-4.4,45.6c-0.1,0.9,0.1,1.8,0.4,2.6c-0.9,0.9-1.5,2.2-1.5,3.8c0,30.1-0.6,60.4,4.6,90.2c4.8,27.1,15.2,52.9,31.6,75.1c29.2,39.5,73.5,63.3,120.4,75c88.9,22.2,194.2,3.7,264.5-57.1C505.6,364.4,514.8,257.6,487.9,168.7z M423.5,421.2c-70.8,60.4-176.9,76-264.9,50.8c-42.7-12.2-81.9-36.6-107.2-73.7c-31.1-45.6-30.1-101-30.1-153.9c0-0.3,0-0.5-0.1-0.8c0.5-0.7,0.9-1.6,1-2.7c1.7-27,4.1-54.1,12.1-80.1C42.2,134.9,57.4,112.4,77,94c37.3-35.2,89.8-53.2,139.6-61.1C272,24.1,332,26.5,383,52.1c44.6,22.5,75.1,63.1,91.3,109.6C504.4,248.9,497.6,357.9,423.5,421.2z"/><path d="M397.4,211.1c1.1-0.9,1.8-2.2,1.8-4l0-1.5c0,0,0,0,0-0.1l-0.1-13.5c0-3-2.9-4.5-5.4-4.6c-27.4-1.1-54.7,0.1-82,1.7c0-24.7,0.3-49.4,0.3-74.1c0-3.2-2.5-4.6-5-4.4c-0.4-0.1-0.9-0.2-1.3-0.2c-22.4,0-44.8-1-67.2-1h-42.2c-0.7,0-1.4,0.1-1.9,0.4c-0.4,0.1-0.7,0.3-1.1,0.5c-4.4,2.5-3.7,10.7-3.8,14.8c-0.2,8,0.1,15.9,0.4,23.9c0.5,14.8,1.3,29.5,1.7,44.3c-26.4,0.2-53.6,0.1-79.8,0.3c-3.2,0-4.6,2.6-4.4,5.1c-0.1,0.4-0.2,0.9-0.2,1.3c0.1,22.4-0.7,44.8-0.5,67.2l0.3,42.2c0,0.7,0.1,1.4,0.4,1.9c0.1,0.4,0.3,0.7,0.5,1.1c2.5,4.4,10.8,3.6,14.9,3.7c8,0.2,15.9-0.2,23.9-0.6c14.8-0.6,29.6-1.5,44.4-2.1c-0.3,27.1-0.7,54.4,1.9,81.3c0.2,2.1,1.8,4.3,4,4.5c18.1,2,36.4,1.2,54.6,1.1c12.9-0.1,28.2-3.9,40.8,0.2c0.9,1.1,2.2,1.8,4,1.8h15c3,0,4.5-2.8,4.6-5.4c1.4-28.1,0.2-56-1.2-84c25.9,0.1,51.9,0.1,77.6-2.6c2.1-0.2,4.3-1.8,4.5-4.1c1.9-18.1,0.9-36.4,0.6-54.6C397.4,239,393.4,223.8,397.4,211.1z M387.4,247.5c1.1,17.6,1.6,35.8,0,53.4c-25.9,2.4-52,2.1-78,2.1c-1.5,0-2.9,0-4.4,0v2.4h-0.6c1.5,29,2.9,58,1.8,87H299c-13.3-5.6-29.1-3-43-2.2c-17.6,1-35.8,1.3-53.4-0.4c-2.2-25.9-1.7-52-1.5-78c0-2.1,0-4.3,0.1-6.4H201l0.3-2c-16.3,0.6-33.8,1.4-50.1,2c-7,0.2-14,0.6-21,0.7c-3.7,0.1-7.3,0.1-11,0c-0.7,0-1.5-0.1-2.2-0.2l-0.3-39.6c-0.2-20.9,0.5-41.9,0.5-62.8c27.6-0.2,55.2-0.1,82.8-0.4l0.8-5.8h0.7c0-1.4-0.1-2.8-0.1-4.1l0,0h0c-0.4-13.2-1-26.4-1.4-39.6c-0.2-7-0.5-14-0.6-21c0-3.7,0-7.3,0.1-11c0-0.7,0.1-1.5,0.2-2.2h39.6c20.9,0,41.8,0.8,62.8,1c0,23.1-0.2,46.2-0.2,69.3c-0.1,0-0.3,0-0.4,0c0.1,1.3,0.2,2.6,0.2,3.9c0,0.4,0.1,0.8,0.2,1.2c0,0.9,0,1.7,0,2.6h0.4c0.1,0.8,0.2,1.5,0.4,2.3c28.9-1.7,57.7-3.3,86.7-2.5l0.1,7.2C383.7,217.8,386.5,233.6,387.4,247.5z"/></svg>';
              plus.className = 'plus-sign';
              plus.style.fontSize = '20px';
              plus.style.color = 'red';
              //plus.style.zIndex = '99';
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
                     popup.style.height = "55%";
                     popup.style.transform = 'translate(-50%, -50%)';
                     popup.style.padding = '20px';
                     //popup.style.border = '2px solid #333';
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

                     //Making the suggstions div the title/text and the 3 alternatives
                     const alternatives = [{grade: "A", color: "#6edd57",price:"45.99",link:"https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo2MzI1Nzg1MzEwMjM2NzY0OjE2OTEwMDc0MTM6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDA5OTQxMzUxMDcyMTo6MDo6&url=%2FReel-Toilet-Tree-Free-Bamboo-Tissue%2Fdp%2FB088T79ZCS%2Fref%3Dsxin_15_pa_sp_search_thematic-asin_sspa%3Fcontent-id%3Damzn1.sym.177726c2-fdbe-4911-809a-75f891c4e015%253Aamzn1.sym.177726c2-fdbe-4911-809a-75f891c4e015%26crid%3D1QD3AQM4IX4O3%26cv_ct_cx%3Dtoilet%2Bpaper%26keywords%3Dtoilet%2Bpaper%26pd_rd_i%3DB088T79ZCS%26pd_rd_r%3Dca44b541-7b62-43fa-b47f-8ce3afb2260e%26pd_rd_w%3DzCYTg%26pd_rd_wg%3DRvr45%26pf_rd_p%3D177726c2-fdbe-4911-809a-75f891c4e015%26pf_rd_r%3D7E4RKDGXDMFGQPMXTKE9%26qid%3D1691007413%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dtoilet%2Bpapper%252Caps%252C152%26sr%3D1-1-5c1882be-cde7-4e07-b6b0-da12dbf89fb6-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",title:"Reel Premium Bamboo Toilet Paper - 24 Rolls",imgSrc:"https://m.media-amazon.com/images/I/71bTYjBgzcL._AC_UL800_FMwebp_QL65_.jpg"},
                     {grade: "B",price:"29.99",color: "#5fc1ed",link:"https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NTg2NTU1OTU5NDMzODkzOjE2OTEwMDc0MTM6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDA1MzA2Nzk5Njk3MTo6MTo6&url=%2FBamboo-Toilet-Paper-Betterway-Biodegradable%2Fdp%2FB07Y7KDZ47%2Fref%3Dsxin_14_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.1c86ab1a-a73c-4131-85f1-15bd92ae152d%253Aamzn1.sym.1c86ab1a-a73c-4131-85f1-15bd92ae152d%26crid%3D1QD3AQM4IX4O3%26cv_ct_cx%3Dtoilet%2Bpaper%26keywords%3Dtoilet%2Bpaper%26pd_rd_i%3DB07Y7KDZ47%26pd_rd_r%3Dca44b541-7b62-43fa-b47f-8ce3afb2260e%26pd_rd_w%3DlIXBx%26pd_rd_wg%3DRvr45%26pf_rd_p%3D1c86ab1a-a73c-4131-85f1-15bd92ae152d%26pf_rd_r%3D7E4RKDGXDMFGQPMXTKE9%26qid%3D1691007413%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dtoilet%2Bpapper%252Caps%252C152%26sr%3D1-2-364cf978-ce2a-480a-9bb0-bdb96faa0f61-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",title:"Bamboo Toilet Paper 3 PLY",imgSrc:"https://m.media-amazon.com/images/I/71R-qMVD5FL._AC_UL800_FMwebp_QL65_.jpg"},
                     {grade: "A", color: "#6edd57", price:"27.99",link:"https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjU0NjAxNDAzNDgyODMwOjE2OTEwMDc0MTM6c3BfbXRmOjMwMDAwMTYwMjIyNTYwMjo6MDo6&url=%2FecoHiny-Certified-Flushable-Friendly-Packaging%2Fdp%2FB0B94LLJXK%2Fref%3Dsr_1_11_sspa%3Fcrid%3D1QD3AQM4IX4O3%26keywords%3Dtoilet%2Bpaper%26qid%3D1691007413%26rdc%3D1%26sprefix%3Dtoilet%2Bpapper%252Caps%252C152%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",title:"Premium & Soft Bamboo Toilet Paper",imgSrc:"https://m.media-amazon.com/images/I/71JDlivc6HL._AC_UL800_FMwebp_QL65_.jpg"},
                     {grade: "B",price:"12.98",color: "#5fc1ed",link:"https://www.amazon.com/Quilted-Northern-Strong-Toilet-Regular/dp/B0BB3HD4SX/ref=sr_1_48?crid=1QD3AQM4IX4O3&keywords=toilet+paper&qid=1691007413&sprefix=toilet+papper%2Caps%2C152&sr=8-48",title:"Quilted Northern Ultra Soft & Strong Toilet Paper",imgSrc:"https://m.media-amazon.com/images/I/919Q26ciqrL._AC_UL800_FMwebp_QL65_.jpg"},
                     ]
                     const suggestionsContainer = document.createElement('div');
                     const suggestionTitle = document.createElement('h4');
                     suggestionTitle.textContent = "Eco-friendly alternatives";
                     const suggestionP = document.createElement('p');
                     var userChooseAlt = getRandomNumber()
                     suggestionP.textContent = `${userChooseAlt} users chose an eco-friendly alternative`;
                     suggestionP.style.fontSize = "12px";
                     //This is the product container and products and appending them
                     const productContainer = document.createElement('div');
                     const altProductA = document.createElement('section');

                     const altProductGradeA = document.createElement('div')
                     altProductGradeA.textContent = alternatives[1].grade;
                     altProductGradeA.style.backgroundColor = alternatives[1].color;
                     altProductGradeA.classList.add('productGrade');
                     altProductA.appendChild(altProductGradeA);

                     const altProductAImgContainer = document.createElement('div');
                     const altProductATag = document.createElement('a')
                     altProductATag.href = alternatives[1].link
                     altProductATag.target="_blank"
                     altProductA.appendChild(altProductATag)
                     altProductATag.appendChild(altProductAImgContainer)
                     const altProductTitleA = document.createElement('p');


                     altProductA.appendChild(altProductTitleA)
                     altProductTitleA.textContent = `$${alternatives[1].price} - ${alternatives[1].title}`;
                     const altProductImgA = document.createElement('img');
                     altProductAImgContainer.appendChild(altProductImgA)
                     altProductAImgContainer.classList.add("imgContainer")
                     altProductImgA.src = alternatives[1].imgSrc;
                     altProductImgA.style.width = "100%";


                     


                   
                     const altProductB = document.createElement('section');

                     const altProductGradeB = document.createElement('div')
                     altProductGradeB.textContent = alternatives[2].grade;
                     altProductGradeB.style.backgroundColor = alternatives[2].color;
                     altProductGradeB.classList.add('productGrade');

                     altProductB.appendChild(altProductGradeB);
                     const altProductBImgContainer = document.createElement('div');
                     const altProductBTag = document.createElement('a')
                     altProductBTag.href = alternatives[2].link
                     altProductBTag.target="_blank"
                     altProductB.appendChild(altProductBTag)
                     altProductBTag.appendChild(altProductBImgContainer)


                     const altProductImgB = document.createElement('img');
                     altProductBImgContainer.appendChild(altProductImgB)
                     altProductBImgContainer.classList.add("imgContainer")
                     altProductImgB.src = alternatives[2].imgSrc;
                     altProductImgB.style.width = "100%";

                     const altProductTitleB = document.createElement('p');
                     altProductB.appendChild(altProductTitleB)
                     altProductTitleB.textContent = `$${alternatives[2].price} - ${alternatives[2].title}`;

                     







                     const altProductC = document.createElement('section');

                    const altProductGradeC = document.createElement('div')
                     altProductGradeC.textContent = alternatives[3].grade;
                     altProductGradeC.style.backgroundColor = alternatives[3].color;
                     altProductGradeC.classList.add('productGrade');
                     altProductC.appendChild(altProductGradeC);

                     const altProductCImgContainer = document.createElement('div');
                     const altProductCTag = document.createElement('a')
                     altProductCTag.href = alternatives[3].link
                     altProductCTag.target="_blank"
                     altProductC.appendChild(altProductCTag)
                     altProductCTag.appendChild(altProductCImgContainer)

                     const altProductImgC = document.createElement('img');
                     altProductCImgContainer.appendChild(altProductImgC)
                     altProductCImgContainer.classList.add("imgContainer")
                     altProductImgC.src = alternatives[3].imgSrc;
                     altProductImgC.style.width = "100%";
                     const altProductTitleC = document.createElement('p');


                     altProductC.appendChild(altProductTitleC)
                     altProductTitleC.textContent = `$${alternatives[3].price} - ${alternatives[3].title}`;

                   



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
                     const seeMore = document.createElement('p')
                     seeMore.innerHTML = `<a style="color: black;">See More ></a>`
                     suggestionsContainer.appendChild(seeMore)
                  seeMore.style.fontSize = "12px"
                  seeMore.style.color = "black"



                     if(grade.grade == "A"){
                         popup.style.width = "30";
                         popup.style.height = "30%";
                         const message = document.createElement('h4')
                         message.classList.add('message')
                         message.textContent = "Exellent Choice!"
                         message.style.textAlign = "center";
                         popup.appendChild(message)

                     } else {
                       popup.appendChild(suggestionsContainer)
                     }



                     //Button that allows user to close popup
                     const exitButton = document.createElement('button');
                     const exitButtonContainer = document.createElement('div');
                     exitButton.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3007 0.709971C12.9107 0.319971 12.2807 0.319971 11.8907 0.709971L7.0007 5.58997L2.1107 0.699971C1.7207 0.309971 1.0907 0.309971 0.700703 0.699971C0.310703 1.08997 0.310703 1.71997 0.700703 2.10997L5.5907 6.99997L0.700703 11.89C0.310703 12.28 0.310703 12.91 0.700703 13.3C1.0907 13.69 1.7207 13.69 2.1107 13.3L7.0007 8.40997L11.8907 13.3C12.2807 13.69 12.9107 13.69 13.3007 13.3C13.6907 12.91 13.6907 12.28 13.3007 11.89L8.4107 6.99997L13.3007 2.10997C13.6807 1.72997 13.6807 1.08997 13.3007 0.709971Z" fill="black" fill-opacity="0.54"/>
</svg>`;
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