
// MOBILE NAVIGATION (HAMBURGER MENU)

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// OPTIONAL: CLOSE MENU WHEN CLICKING A LINK (mobile UX improvement)

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#navLinks a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            const nav = document.getElementById("navLinks");
            nav.classList.remove("active");
        });
    });
});


// OPTIONAL: SMOOTH SCROLL (only useful if you add section links later)


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});