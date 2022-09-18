/* element visibility on viewport visibility */
/* var observer = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    if (entries[0]["isIntersecting"] === true)
      document
        .querySelector("#ws-presentation")
        .classList.add("text-appearance");
    else
      document
        .querySelector("#ws-presentation")
        .classList.remove("text-appearance");
  },
  { threshold: [1] }
);
observer.observe(document.querySelector("#ws-presentation")); */

// NAVBAR
let lastScrollTop = 0;
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-70px";
    } else navbar.style.top = "0";
    lastScrollTop = scrollTop;
});
