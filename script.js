// Animații GSAP
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

// Slider Swiper.js
var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000 },
});
