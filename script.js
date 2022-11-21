// NAVBAR
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
// let main = document.getElementsByName("main");
let welcomeSection = document.getElementById("welcome-section");
window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else navbar.style.top = "0";
  lastScrollTop = scrollTop;
  // debugger;
  // window.scrollBy(0, welcomeSection.innerHeight);
});
