// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= DROPDOWN TOGGLE =================
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        // Toggle display
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});