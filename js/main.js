/* ==========================================================
COPY TO CLIPBOARD CONTACT ACTIONS
Handles Email & Phone copy buttons
========================================================== */

document.querySelectorAll(".copy-btn").forEach(button=>{

button.addEventListener("click",()=>{

const value=button.dataset.copy;

navigator.clipboard.writeText(value);

const originalText=button.textContent;

button.textContent="✓ Copied";

button.classList.add("copied");

setTimeout(()=>{

button.textContent=originalText;

button.classList.remove("copied");

},2000);

});

});
