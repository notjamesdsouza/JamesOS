// =======================================
// BUSINESS IMPACT COUNTERS
// =======================================

const counters = document.querySelectorAll("[data-count]");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = +counter.dataset.count;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 120));

        function update() {

            current += increment;

            if (current >= target) {

                counter.innerText = target.toLocaleString() + "+";

            } else {

                counter.innerText = current.toLocaleString();

                requestAnimationFrame(update);

            }

        }

        update();

    });

}

const impactSection = document.querySelector("#impact");

function checkCounters() {

    if (!impactSection) return;

    const rect = impactSection.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {

        startCounters();

    }

}

window.addEventListener("scroll", checkCounters);

window.addEventListener("load", checkCounters);