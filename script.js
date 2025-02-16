// JOIN TELEGRAM FUNCTION
function joinTelegram() {
    window.location.href = "https://t.me/PandaDrive";
}

// FETCH CRYPTO PRICE (EXEMPLU CU CoinGecko)
async function fetchCryptoPrice() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usdt");
        const data = await response.json();
        document.getElementById("price").textContent = data.bitcoin.usdt;
    } catch (error) {
        document.getElementById("price").textContent = "Eroare!";
    }
}

// APELARE AUTOMATĂ
fetchCryptoPrice();

// TAWK.TO CHAT SCRIPT
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67b13be97888a3190bb5e190/1ik65424k';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
