document.querySelector("#menu-btn").addEventListener("click", function(){
    var navbar = document.querySelector("#navbar");
    if (navbar.style.right === "0px") {
        navbar.style.right = "-250px";
    } else {
        navbar.style.right = "0px";
    }
})