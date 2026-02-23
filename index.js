// Optional smooth scroll or future JS
console.log("Endocare Hospital Loaded Successfully");

// toggle auto close section 
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (window.innerWidth < 992) { // Only mobile & tablet
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }

        });
    });

});