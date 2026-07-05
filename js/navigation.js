// ======================================
// JAMESOS NAVIGATION
// ======================================
const header = document.querySelector(".site-header");
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
window.addEventListener("scroll",updateActiveSection);
// =============================
// STICKY NAVBAR
// =============================
window.addEventListener("scroll",()=>{
    if(window.scrollY>40){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
});
// =============================
// HIDE NAVBAR WHEN SCROLLING
// =============================
let lastScroll = 0;
window.addEventListener("scroll",()=>{
    const currentScroll = window.pageYOffset;
    if(currentScroll<=0){
        header.classList.remove("scroll-up");
        return;
    }
    if(currentScroll>lastScroll &&
       !header.classList.contains("scroll-down")){
        header.classList.remove("scroll-up");
        header.classList.add("scroll-down");
    }
    else if(currentScroll<lastScroll &&
            header.classList.contains("scroll-down")){
        header.classList.remove("scroll-down");
        header.classList.add("scroll-up");
    }
    lastScroll=currentScroll;
});
