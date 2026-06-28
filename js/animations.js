// =======================================
// SCROLL REVEAL ANIMATION
// =======================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);