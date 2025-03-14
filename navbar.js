/* document.querySelector("#menu-btn").addEventListener("click", function(){
    var navbar = document.querySelector("#navbar");
    if (navbar.style.right === "0px") {
        navbar.style.right = "-250px";
    } else {
        navbar.style.right = "0px";
    }
}) */
document.querySelector("#menu-btn").addEventListener("click", function (event) {
    var navbar = document.querySelector("#navbar");
    if (navbar.style.right === "0px") {
        navbar.style.right = "-250px";
    } else {
        navbar.style.right = "0px";
    }
    event.stopPropagation(); // Menü düğmesine tıklandığında olayın yukarı yayılmasını engeller
});

document.addEventListener("click", function (event) {
    var navbar = document.querySelector("#navbar");
    var menuBtn = document.querySelector("#menu-btn");

    // Tıklanan öğe navbar veya menuBtn değilse, menüyü kapat
    if (navbar.style.right === "0px" && !navbar.contains(event.target) && !menuBtn.contains(event.target)) {
        navbar.style.right = "-250px";
    }
});