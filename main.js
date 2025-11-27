// -----------------------------
// HOME DROPDOWN TOGGLE (ONLY ARROW)
// -----------------------------
const arrow = document.querySelector(".arrow");
const dropdownMenu = document.querySelector(".dropdown-menu");

arrow.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";

  arrow.classList.toggle("rotate");
});


// -----------------------------
// MOBILE MENU TOGGLE
// -----------------------------
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close mobile menu when clicking any link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


// -----------------------------
// SEARCH BAR TOGGLE
// -----------------------------
const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", () => {
  navSearch.classList.toggle("open");
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});





