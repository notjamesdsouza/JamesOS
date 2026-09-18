// ======================================
// JAMESOS NAVIGATION
// ======================================
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
// =============================
// MOBILE MENU
// =============================
if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navToggle.classList.toggle("active");
    });
}
// =============================
// CLOSE MENU AFTER CLICK
// =============================
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if(navMenu){
            navMenu.classList.remove("active");
        }
        if(navToggle){
            navToggle.classList.remove("active");
        }
    });
});
// =============================
// ACTIVE NAVIGATION
// =============================
const sections = document.querySelectorAll("section");
function updateActiveSection(){
    let current = "";
    sections.forEach(section=>{
        const top = section.offsetTop-150;
        const height = section.offsetHeight;
        if(pageYOffset >= top){
            current = section.id;
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
}
window.addEventListener("scroll", updateActiveSection);

const header = document.querySelector(".site-header");

window.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        header.classList.add("show");
    }
});
