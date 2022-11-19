// NAVBAR
let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
let main = document.getElementsByName("main");
window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else navbar.style.top = "0";
  lastScrollTop = scrollTop;
});
