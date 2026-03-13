/* SCROLL REVEAL ANIMATIONS */

ScrollReveal().reveal('.hero-content',{
distance:'60px',
duration:1000,
origin:'bottom',
delay:200
});

ScrollReveal().reveal('.feature-box',{
distance:'50px',
duration:900,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.service-card',{
distance:'50px',
duration:900,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.class-card',{
distance:'50px',
duration:900,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.plan-card',{
distance:'50px',
duration:900,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.why-box',{
distance:'50px',
duration:900,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.contact-info',{
distance:'60px',
duration:900,
origin:'left'
});

ScrollReveal().reveal('.contact-map',{
distance:'60px',
duration:900,
origin:'right'
});


/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll",function(){

let nav = document.querySelector(".navbar");

if(window.scrollY > 50){

nav.style.background="rgba(0,0,0,0.95)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,0.7)";

}

else{

nav.style.background="rgba(0,0,0,0.85)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,0.6)";

}

});

/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar nav");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

});