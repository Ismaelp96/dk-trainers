// nav politicas

const linkPrivacity = document.querySelectorAll(".js-topics-politicas li a");

function scrollToPrivacity(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const privacity = document.querySelector(href);

  console.log(privacity);

  const initPosition = privacity.offsetTop;

  window.scrollTo({
    top: initPosition - 107,
    behavior: "smooth",
  });
}

linkPrivacity.forEach((link) => {
  link.addEventListener("click", scrollToPrivacity);
});

// menu privacity

const btnMobilePrivacity = document.querySelector(".js-btn-mobile");
console.log(btnMobilePrivacity);

const closeBackgroundPrivacity = document.querySelector(".js-back-mobile");

function activeBtnPrivacity() {
  btnMobilePrivacity.classList.toggle("is-active");
  document.documentElement.classList.toggle("menu-opened");
}

function closeMenuPrivacity() {
  document.documentElement.classList.remove("menu-opened");
  btnMobilePrivacity.classList.remove("is-active");
}

closeBackgroundPrivacity.addEventListener("click", closeMenuPrivacity);

btnMobilePrivacity.addEventListener("click", activeBtnPrivacity);
