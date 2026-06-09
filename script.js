// =========================
// LIGHT / DARK MODE
// =========================

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }

});


// =========================
// SMOOTH ACTIVE NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.style.color = "";
        });

        this.style.color = "#2563eb";

    });

});


// =========================
// SIMPLE FADE-IN ANIMATION
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});
