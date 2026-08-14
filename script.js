// =========================
// MENÚ MOBILE
// =========================

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


// =========================
// CERRAR MENÚ AL NAVEGAR
// =========================

const mobileLinks = document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});


// =========================
// ANIMACIÓN SUAVE AL SCROLL
// =========================

const sections = document.querySelectorAll(
    ".intro, .collection, .message-section, .story, .statement, .contact"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


sections.forEach(function (section) {

    observer.observe(section);

});
