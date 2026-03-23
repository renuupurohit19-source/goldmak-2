// MOBILE MENU TOGGLE
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// DOM READY
document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // CLOSE MENU WHEN CLICKING LINK (MOBILE)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

    // SMOOTH SCROLLING (FIXED HEADER OFFSET)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                const offset = 80; // header height
                const top = target.offsetTop - offset;

                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });
            }
        });
    });

    // ACTIVE NAV LINK ON SCROLL (FIXED)
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

});


// CONTACT FORM VALIDATION (IMPROVED)
function validateForm() {
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    // EMPTY CHECK
    if (!name || !email || !message) {
        alert("⚠️ Please fill all fields!");
        return false;
    }

    // EMAIL VALIDATION (PROPER)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address!");
        return false;
    }

    // SUCCESS
    alert("✅ Message sent successfully! We'll reply within 24 hours.");
    return true;
}
