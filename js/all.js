"use strict";var dk_instruc=new Swiper(".instructors",{effect:"fade",speed:600,pagination:{el:".swiper-pagination"}}),slide_depoimentos=new Swiper(".slide-depoimentos",{slidesPerView:3,spaceBetween:28,pagination:{el:".s-depoimentos .top .ctrl-slide .swiper-pagination",clickable:!0},navigation:{nextEl:".s-depoimentos .top .ctrl-slide .btn-next",prevEl:".s-depoimentos .top .ctrl-slide .btn-prev"},speed:600,breakpoints:{320:{slidesPerView:1},500:{slidesPerView:1.8},800:{slidesPerView:2.4},991:{slidesPerView:2.5},1150:{slidesPerView:3}}}),openResolution=document.querySelectorAll(".js-open-question"),resolutionText=document.querySelectorAll(".js-awnser-down");openResolution.forEach(function(e,t){e.addEventListener("click",function(){resolutionText.forEach(function(e){e.parentElement.classList.remove("active")}),openResolution.forEach(function(e){e.parentElement.classList.remove("active")}),e.parentElement.classList.add("active"),resolutionText[t].parentElement.classList.add("active")})});var btnMobile=document.getElementById("js-btn-mobile");btnMobile.addEventListener("click",function(){btnMobile.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")});var linksSection=document.querySelectorAll(".js-nav li a");function scrollToSection(e){e.preventDefault();e=e.currentTarget.getAttribute("href"),e=document.querySelector(e).offsetTop;window.scrollTo({top:e-107,behavior:"smooth"})}function closeitemMenu(){document.documentElement.classList.remove("menu-opened"),btnMobile.classList.remove("is-active")}linksSection.forEach(function(e){e.addEventListener("click",scrollToSection)}),linksSection.forEach(function(e){e.addEventListener("click",closeitemMenu)}),AOS.init({duration:1e3,once:!0});var linkPrivacity=document.querySelectorAll(".js-topics-politicas li a");function scrollToPrivacity(e){e.preventDefault();e=e.currentTarget.getAttribute("href"),e=document.querySelector(e);console.log(e);e=e.offsetTop;window.scrollTo({top:e-107,behavior:"smooth"})}linkPrivacity.forEach(function(e){e.addEventListener("click",scrollToPrivacity)});var btnMobilePrivacity=document.querySelector(".js-btn-mobile");console.log(btnMobilePrivacity);var closeBackgroundPrivacity=document.querySelector(".js-back-mobile");function activeBtnPrivacity(){btnMobilePrivacity.classList.toggle("is-active"),document.documentElement.classList.toggle("menu-opened")}function closeMenuPrivacity(){document.documentElement.classList.remove("menu-opened"),btnMobilePrivacity.classList.remove("is-active")}closeBackgroundPrivacity.addEventListener("click",closeMenuPrivacity),btnMobilePrivacity.addEventListener("click",activeBtnPrivacity);