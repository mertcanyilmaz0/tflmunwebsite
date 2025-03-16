/* document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        const arrow = item.querySelector(".arrow");

        answer.style.display = answer.style.display === "block" ? "none" : "block";
        item.classList.toggle("open");
    });
}); */
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        const arrow = item.querySelector(".arrow");

        // Cevap kısmını animasyonlu şekilde açıp kapatıyoruz
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // Kapalıyken max-height'ı sıfırlıyoruz
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Açıldığında gerçek yüksekliği alıyoruz
        }

        // Ok işaretini döndür
        arrow.classList.toggle("rotate");
        item.classList.toggle("open");
    });
});
