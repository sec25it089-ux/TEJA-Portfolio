
// Select menu button and navigation links
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

// Open and close the mobile menu
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
