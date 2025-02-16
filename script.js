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
});
