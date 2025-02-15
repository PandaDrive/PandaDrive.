document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    let triggerBottom = window.innerHeight * 0.85;

    elements.forEach((el) => {
      let top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "0"; // Afișează meniul la scroll în jos
    } else {
      navbar.style.top = "-60px"; // Ascunde meniul când utilizatorul dă scroll în sus
    }
    lastScrollTop = scrollTop;
  });
});
