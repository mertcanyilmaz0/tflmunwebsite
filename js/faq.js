document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        const arrow = item.querySelector(".arrow");

        answer.style.display = answer.style.display === "block" ? "none" : "block";
        item.classList.toggle("open");
    });
});