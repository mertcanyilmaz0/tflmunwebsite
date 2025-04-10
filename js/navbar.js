document.querySelector("#menu-btn").addEventListener("click", function(event) {
    var navbar = document.querySelector("#navbar");
    var dropDownNavbar = document.querySelector("#dropdownNav");
    if (navbar.style.right === "0px") {
        navbar.style.right = "-250px";
        dropDownNavbar.style.visibility = 'hidden';
        dropDownNavbar.style.opacity = "0";
        console.log("görünmez");
        dropDown.style.borderBottom = '';
        dropDown.style.paddingBottom = '';
        dropDown.style.display = '';
    } else {
        navbar.style.right = "0px";
    }
    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    var navbar = document.querySelector("#navbar");
    var menuBtn = document.querySelector("#menu-btn");


    if (navbar.style.right === "0px" && !navbar.contains(event.target) && !menuBtn.contains(event.target)) {
        navbar.style.right = "-250px";
    }
});
document.querySelector("#dropdown").addEventListener("click", function(event) {
    var dropDownNavbar = document.querySelector("#dropdownNav");
    var dropDown = document.querySelector("#dropdown");
    var screenWidth = window.innerWidth;

    if (screenWidth <= 991) {
        if (dropDownNavbar.style.opacity === "0" || dropDownNavbar.style.opacity === "") {
            dropDownNavbar.style.visibility = 'visible';
            dropDownNavbar.style.opacity = "1";
            dropDownNavbar.style.display = "inline-block";
            dropDown.style.borderBottom = '0.1rem solid var(--bg-color)';
            dropDown.style.paddingBottom = '1rem';
            dropDown.style.display = 'flex';
        } else {
            closeDropdown();
        }
    } else {
        if (dropDownNavbar.style.opacity === "0" || dropDownNavbar.style.opacity === "") {
            dropDownNavbar.style.visibility = 'visible';
            dropDownNavbar.style.opacity = "1";
            dropDownNavbar.style.display = "inline-block";
            dropDown.style.borderBottom = '0.1rem solid var(--bg-color)';
            dropDown.style.paddingBottom = '1rem';
            dropDown.style.display = 'flex';
        } else {
            closeDropdown();
        }
    }
});

window.addEventListener("resize", function() {
    var screenWidth = window.innerWidth;
    if (screenWidth <= 991) {
        closeDropdown();
    }
});

window.addEventListener("scroll", function() {
    closeDropdown();
});

function closeDropdown() {
    var dropDownNavbar = document.querySelector("#dropdownNav");
    var dropDown = document.querySelector("#dropdown");

    dropDownNavbar.style.visibility = 'hidden';
    dropDownNavbar.style.opacity = "0";
    dropDown.style.borderBottom = '';
    dropDown.style.paddingBottom = '';
    dropDown.style.display = '';
}
function bugfix(){
    var dropDown = document.querySelector("#dropdown");
    var dropDownNavbar = document.querySelector("#dropdownNav");
    dropDown.style.display = '';
    dropDownNavbar.style.display = "none";
}
bugfix()