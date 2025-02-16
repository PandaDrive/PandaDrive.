// GSAP pentru animații la scroll
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1.2 });
gsap.from(".cta-button", { opacity: 0, scale: 0.5, duration: 1.5 });

// Swiper.js pentru slider NFT-uri
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000 },
});
