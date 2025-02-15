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
