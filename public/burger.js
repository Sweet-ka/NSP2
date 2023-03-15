const header_nav = document.querySelector(".header_nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  if (header_nav.classList.contains("header_nav_close")) {
    header_nav.classList.remove("header_nav_close");
    header_nav.classList.add("header_nav_open");
  } else if (header_nav.classList.contains("header_nav_open")) {
    header_nav.classList.remove("header_nav_open");
    header_nav.classList.add("header_nav_close");
  } else {
    header_nav.classList.add("header_nav_open");
  }
});
