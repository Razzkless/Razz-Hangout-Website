document.addEventListener("DOMContentLoaded", function () {
    // Select necessary DOM elements
    const navLinks = document.querySelectorAll(".nav-link");
    const iframe = document.getElementById("twitch-iframe");

    // Active link handling (for navigation)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Ensure the Twitch iframe is always visible
    iframe.style.display = "block";
});
