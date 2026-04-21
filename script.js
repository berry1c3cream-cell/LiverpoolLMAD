// carousel
const right = document.querySelector('.arrow.right');
const left = document.querySelector('.arrow.left');
const carousel = document.querySelector('.carousel');

if(right && left && carousel){

right.onclick = () => {
  carousel.scrollBy({ left: 320, behavior: 'smooth' });
};

left.onclick = () => {
  carousel.scrollBy({ left: -320, behavior: 'smooth' });
};

}


// sticky buy bar
const sticky = document.getElementById("buySticky");
const reviews = document.getElementById("reviews");

if(sticky && reviews){

window.addEventListener("scroll", () => {

const rect = reviews.getBoundingClientRect();

if(rect.top <= 120){
    sticky.classList.add("stickTop");
}else{
    sticky.classList.remove("stickTop");
}

});

}


// fade in
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});


// fade out
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        if(link.href){
            e.preventDefault();
            const url = link.href;

            document.body.classList.remove("loaded");
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = url;
            }, 300);
        }
    });
});

const accBtn = document.getElementById("accessibilityBtn");
const accPanel = document.getElementById("accessPanel");
const darkToggle = document.getElementById("darkToggle");


// abrir panel
accBtn?.addEventListener("click", () => {
    accPanel.classList.toggle("show");
});


// cerrar si clic afuera
document.addEventListener("click", e => {
    if(!accPanel?.contains(e.target) && !accBtn?.contains(e.target)){
        accPanel?.classList.remove("show");
    }
});


// cargar preferencia guardada
if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
    if(darkToggle) darkToggle.checked = true;
}


// toggle dark mode
darkToggle?.addEventListener("change", () => {

document.body.classList.toggle("dark");

const isDark = document.body.classList.contains("dark");

localStorage.setItem("darkMode", isDark);

});

// Menú desplegable
const catBtn = document.querySelector(".btn-cat");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

catBtn?.addEventListener("click", () => {
    menu.classList.toggle("active");
    content.classList.toggle("shift");
});

const overlay = document.querySelector(".overlay");

catBtn?.addEventListener("click", () => {
    menu.classList.toggle("active");
    content.classList.toggle("shift");
    overlay?.classList.toggle("show");
});

overlay?.addEventListener("click", () => {
    menu.classList.remove("active");
    content.classList.remove("shift");
    overlay.classList.remove("show");
});


const tabs = document.querySelectorAll(".tabAlt")
const contents = document.querySelectorAll(".tabContent")

tabs.forEach(tab=>{
tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"))
contents.forEach(c=>c.classList.remove("active"))

tab.classList.add("active")

document
.getElementById(tab.dataset.tab)
.classList.add("active")

})
})