// MOBILE MENU TOGGLE - FIXED
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// DOM READY
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // CLOSE MENU ON LINK CLICK (MOBILE)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

    // CLOSE MENU ON OUTSIDE CLICK
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !e.target.closest(".menu-btn")) {
            menu.classList.remove("active");
        }
    });

    // SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 100;
                const top = target.offsetTop - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        });
    });

    // ACTIVE NAV LINK ON SCROLL
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}` || 
                (currentSection === "" && link.getAttribute("href") === "index.html")) {
                link.classList.add("active");
            }
        });
    });
});

// CONTACT FORM VALIDATION - FIXED
function validateForm() {
    const name = document.getElementById("name")?.value?.trim();
    const email = document.getElementById("email")?.value?.trim();
    const message = document.getElementById("message")?.value?.trim();
    const phone = document.getElementById("phone")?.value?.trim();

    // REQUIRED FIELDS
    if (!name || !email || !message) {
        alert("⚠️ Please fill all required fields (*)");
        return false;
    }

    // EMAIL VALIDATION
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("⚠️ Please enter a valid email address!");
        document.getElementById("email").focus();
        return false;
    }

    // PHONE VALIDATION (OPTIONAL)
    if (phone && !/^\+?\d{10,15}$/.test(phone.replace(/\s/g, ''))) {
        alert("⚠️ Please enter a valid phone number!");
        return false;
    }

    // SUCCESS
    alert("✅ Thank you! Your message has been sent. We'll reply within 24 hours.");
    
    // RESET FORM
    document.querySelector('form').reset();
    return false; // Prevent actual submit
}
