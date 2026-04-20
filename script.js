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