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
document.addEventListener("DOMContentLoaded", function() {
    console.log("CryptoPanda este live!");
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("CryptoPanda este live!");

    // Listă de fișiere de verificat
    const filesToCheck = [
        "assets/background.png",
        "assets/panda-car.png",
        "assets/panda1.png",
        "assets/panda2.png",
        "assets/steering-wheel.png",
        "styles.css",
        "script.js"
    ];

    // Funcție care verifică dacă un fișier există
    function checkFileExists(file) {
        fetch(file, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    console.error(`❌ Fișier lipsă: ${file}`);
                } else {
                    console.log(`✅ Fișier OK: ${file}`);
                }
            })
            .catch(error => {
                console.error(`🚨 Eroare la verificarea fișierului ${file}:`, error);
            });
    }

    // Verificăm toate fișierele din listă
    filesToCheck.forEach(file => checkFileExists(file));
});
