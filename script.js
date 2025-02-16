document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".cta-button");
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 0 25px #00c6ff";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0 0 15px #0072ff";
    });

    const nfts = document.querySelectorAll(".nft-container img");
    nfts.forEach((nft) => {
        nft.addEventListener("mouseover", () => {
            nft.style.transform = "rotate(5deg)";
        });

        nft.addEventListener("mouseleave", () => {
            nft.style.transform = "rotate(0deg)";
        });
    });

    const roadmap = document.querySelector(".roadmap");
    roadmap.addEventListener("mouseover", function () {
        roadmap.style.boxShadow = "0 0 30px #00c6ff";
    });

    roadmap.addEventListener("mouseleave", function () {
        roadmap.style.boxShadow = "0 0 20px #00c6ff";
    });
});// Efect de apariție pentru secțiuni la scroll
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
// Scroll lin pentru link-urile din meniu
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 60, 
            behavior: "smooth"
        });
    });
});

// Afișare buton scroll top la derulare
window.addEventListener("scroll", function() {
    let scrollTopButton = document.getElementById("scrollTop");
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

// Funcționalitate scroll back to top
document.getElementById("scrollTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Funcție pentru animare la scroll
function revealSections() {
    let sections = document.querySelectorAll(".hidden");
    let windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
// Schimbă culoarea meniului la scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
function toggleFAQ(item) {
    item.classList.toggle("active");
}
// Funcție pentru a activa efectul de apariție la scroll
function revealSections() {
    let sections = document.querySelectorAll(".hidden");
    let windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
// Dezactivează animațiile pe dispozitive mai vechi
if (window.innerWidth < 600) {
    document.querySelectorAll(".hidden").forEach(el => {
        el.classList.remove("hidden");
    });
}
