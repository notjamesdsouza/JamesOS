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
// ================================
// Animated Counter
// ================================
const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const counter=entry.target;
const target=+counter.dataset.target;
let current=0;
const increment=target/120;
const update=()=>{
current+=increment;
if(current<target){
counter.innerText=Math.ceil(current);
requestAnimationFrame(update);
}
else{
counter.innerText=target.toLocaleString()+"+";
}
}
update();
observer.unobserve(counter);
}
});
});
counters.forEach(counter=>{
observer.observe(counter);
});
});
});
