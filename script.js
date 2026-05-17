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

// cargar años dinámicamente
window.addEventListener("DOMContentLoaded", () => {

    const select = document.getElementById("AnioSelect");

    if(select){

        for(let year = 1927; year <= 2026; year++){

            const option = document.createElement("option");

            option.value = year;
            option.textContent = year;

            select.appendChild(option);
        }
    }

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

// toggle letra grande
const sizeFontToggle = document.getElementById("sizeFontToggle");

// cargar
if(localStorage.getItem("bigFont") === "true"){
document.body.classList.add("bigFont");
sizeFontToggle.checked = true;
}

// toggle
sizeFontToggle?.addEventListener("change", () => {
document.body.classList.toggle("bigFont");

localStorage.setItem(
"bigFont",
document.body.classList.contains("bigFont")
);
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

//Tabs
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

// abrir tab desde URL
const params = new URLSearchParams(window.location.search);
const activeTab = params.get("tab");

if(activeTab){

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    const targetTab = document.querySelector(
        `.tabAlt[data-tab="${activeTab}"]`
    );

    const targetContent = document.getElementById(activeTab);

    if(targetTab && targetContent){
        targetTab.classList.add("active");
        targetContent.classList.add("active");
    }
}

// faq
document.querySelectorAll(".faqQuestion").forEach(q => {
    q.addEventListener("click", () => {
        const item = q.parentElement;
        item.classList.toggle("active");
    });
});

/* Pequeña microinteraccion en la bolsa */
const btnPrimary = document.querySelector(".btnPrimary");
const bagImg = document.getElementById("bagImg");
const bagBadge = document.getElementById("bagBadge");

if (btnPrimary && bagImg) {
    btnPrimary.addEventListener("click", () => {
        bagImg.classList.add("pop-bag");
        
        if (bagBadge) {
            bagBadge.classList.add("show-badge");
        }

        setTimeout(() => {
            bagImg.classList.remove("pop-bag");
        }, 500);
    });
}

/* Microinteracción en el corazon  */

const wishlistButtons = document.querySelectorAll("button");
const heartImg = document.getElementById("heartImg");
const heartBadge = document.getElementById("heartBadge");

wishlistButtons.forEach(btn => {
    if (btn.textContent.trim() === "Mover a Wishlist") {
        btn.addEventListener("click", () => {
            if (heartImg) {
                heartImg.classList.add("pop-heart");
                setTimeout(() => {
                    heartImg.classList.remove("pop-heart");
                }, 500);
            }
            if (heartBadge) {
                heartBadge.classList.add("show-badge");
            }
        });
    }
});

                    /* Formulario de compra */
const btnBuyProduct = document.querySelector(".btnSecondary"); 
const btnBuyCart = document.querySelector(".btnActionCard") || document.querySelector("button.btnPrimaryMC") || Array.from(document.querySelectorAll("button")).find(b => b.textContent.trim() === "Comprar");

const checkoutPanel = document.getElementById("checkoutPanel");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closePanelBtn = document.getElementById("closePanelBtn");
const closePanelBtnX = document.getElementById("closePanelBtnX");

function openCheckout() {
    checkoutPanel?.classList.add("active");
    checkoutOverlay?.classList.add("active");
    document.body.classList.add("modal-open"); // Bloquea el fondo
}

function closeCheckout() {
    checkoutPanel?.classList.remove("active");
    checkoutOverlay?.classList.remove("active");
    document.body.classList.remove("modal-open"); // Libera el fondo
}

// Eventos para abrir
btnBuyProduct?.addEventListener("click", openCheckout);
btnBuyCart?.addEventListener("click", openCheckout);

// Eventos para cerrar
closePanelBtn?.addEventListener("click", closeCheckout);
closePanelBtnX?.addEventListener("click", closeCheckout);
checkoutOverlay?.addEventListener("click", closeCheckout);

