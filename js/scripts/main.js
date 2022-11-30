// fade section instrutores
var dk_instruc = new Swiper(".instructors", {
  effect: "fade",
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
  },
});

// SLide section depoimentos
var slide_depoimentos = new Swiper(".slide-depoimentos", {
  slidesPerView: 3,
  spaceBetween: 28,
  pagination: {
    el: ".s-depoimentos .top .ctrl-slide .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-depoimentos .top .ctrl-slide .btn-next",
    prevEl: ".s-depoimentos .top .ctrl-slide .btn-prev",
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.8,
    },
    800: {
      slidesPerView: 2.4,
    },
    991: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
  },
});

// duvidas
const openResolution = document.querySelectorAll(".js-open-question");
const resolutionText = document.querySelectorAll(".js-awnser-down");

openResolution.forEach((question, index) => {
  question.addEventListener("click", () => {
    resolutionText.forEach((awnser) => {
      awnser.parentElement.classList.remove("active");
    });
    openResolution.forEach((itemOpen) => {
      itemOpen.parentElement.classList.remove("active");
    });
    question.parentElement.classList.add("active");
    resolutionText[index].parentElement.classList.add("active");
  });
});

// MenuMobile
const btnMobile = document.getElementById("js-btn-mobile");

btnMobile.addEventListener("click", () => {
  btnMobile.classList.toggle("is-active");
  document.documentElement.classList.toggle("menu-opened");
});

// nav for section
const linksSection = document.querySelectorAll(".js-nav li a");

function scrollToSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  const initPosition = section.offsetTop;

  window.scrollTo({
    top: initPosition - 107,
    behavior: "smooth",
  });
}

linksSection.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function closeitemMenu() {
  document.documentElement.classList.remove("menu-opened");
  btnMobile.classList.remove("is-active");
}

linksSection.forEach((link) => {
  link.addEventListener("click", closeitemMenu);
});

AOS.init({
  duration: 1000,
  once: true,
});
