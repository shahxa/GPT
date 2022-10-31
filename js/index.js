const togglebutton = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

const toggleFunction = function () {
  navLinks.classList.toggle("show");
};
togglebutton.addEventListener("click", toggleFunction);
