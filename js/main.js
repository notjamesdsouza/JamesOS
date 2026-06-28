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