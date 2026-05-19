// ==========================================
// 1. CAROUSEL
// ==========================================
const wrappers = document.querySelectorAll(".carousel-wrapper");

wrappers.forEach(wrapper => {
    const carousel = wrapper.querySelector(".carousel");
    const leftBtn = wrapper.querySelector(".left");
    const rightBtn = wrapper.querySelector(".right");

    /* botones */
    rightBtn?.addEventListener("click", () => {
        carousel?.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });

    leftBtn?.addEventListener("click", () => {
        carousel?.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });

    /* teclado */
    carousel?.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            carousel.scrollBy({
                left: 320,
                behavior: "smooth"
            });
        }

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            carousel.scrollBy({
                left: -320,
                behavior: "smooth"
            });
        }
    });
});

// ==========================================
// 2. STICKY BUY BAR
// ==========================================
const sticky = document.getElementById("buySticky");
const reviews = document.getElementById("reviews");

if (sticky && reviews) {
    window.addEventListener("scroll", () => {
        const rect = reviews.getBoundingClientRect();
        if (rect.top <= 120) {
            sticky.classList.add("stickTop");
        } else {
            sticky.classList.remove("stickTop");
        }
    });
}

// ==========================================
// 3. FADE IN & FADE OUT
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        // CORRECCIÓN: Si el enlace es una microinteracción o apunta a la misma página, ignorar fade-out
        if (link.classList.contains("iconBtn") || link.classList.contains("miCuentaLink") || link.getAttribute("href") === "#") {
            return;
        }

        if (link.href && !link.href.includes("#")) {
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

// ==========================================
// 4. CARGAR AÑOS DINÁMICAMENTE
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("AnioSelect");
    if (select) {
        for (let year = 1927; year <= 2026; year++) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            select.appendChild(option);
        }
    }
});

// ==========================================
// 5. ACCESIBILIDAD (CORREGIDO CONTRA BLOQUEOS NULL)
// ==========================================
const accBtn = document.getElementById("accessibilityBtn");
const accessPanel = document.getElementById("accessPanel");
const darkToggle = document.getElementById("darkToggle");

// Solo activa los eventos si AMBOS elementos existen en el HTML actual
if (accBtn && accessPanel) {
    accBtn.addEventListener("click", () => {
        accessPanel.classList.toggle("show");

        /* mover foco al primer input */
        if (accessPanel.classList.contains("show")) {
            const firstInput = accessPanel.querySelector("input");
            firstInput?.focus();
        }

        const expanded = accessPanel.classList.contains("show");
        accBtn.setAttribute("aria-expanded", expanded);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            accessPanel.classList.remove("show");
            accBtn.focus();
        }
    });
}

// ==========================================
// DARK MODE + PREFERENCIA DEL SISTEMA
// ==========================================

const savedDarkMode = localStorage.getItem("darkMode");

/* detectar preferencia del sistema */
const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

/* prioridad:
1. preferencia guardada
2. preferencia del sistema
*/

if(savedDarkMode !== null){

    if(savedDarkMode === "true"){

        document.body.classList.add("dark");

        if(darkToggle){
            darkToggle.checked = true;
        }

    }

}else if(prefersDark){

    document.body.classList.add("dark");

    if(darkToggle){
        darkToggle.checked = true;
    }

}

/* toggle manual */
darkToggle?.addEventListener("change", ()=>{

    document.body.classList.toggle("dark");

    const isDark =
    document.body.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);

});

// Toggle Letra Grande
const sizeFontToggle = document.getElementById("sizeFontToggle");

if (localStorage.getItem("bigFont") === "true") {
    document.body.classList.add("bigFont");
    if (sizeFontToggle) sizeFontToggle.checked = true;
}

sizeFontToggle?.addEventListener("change", () => {
    document.body.classList.toggle("bigFont");
    localStorage.setItem("bigFont", document.body.classList.contains("bigFont"));
});

// ==========================================
// 6. MENÚ DESPLEGABLE
// ==========================================
const catBtn = document.querySelector(".btn-cat");
const menu = document.getElementById("menu");
const content = document.getElementById("content");
const overlay = document.querySelector(".overlay");

catBtn?.addEventListener("click", () => {
    menu?.classList.toggle("active");
    content?.classList.toggle("shift");
    overlay?.classList.toggle("show");
});

overlay?.addEventListener("click", () => {
    menu?.classList.remove("active");
    content?.classList.remove("shift");
    overlay.classList.remove("show");
});

// ==========================================
// 7. TABS
// ==========================================
const tabs = document.querySelectorAll(".tabAlt");
const contents = document.querySelectorAll(".tabContent");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab)?.classList.add("active");
    });
});

// Abrir tab desde URL
const params = new URLSearchParams(window.location.search);
const activeTab = params.get("tab");

if (activeTab) {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    const targetTab = document.querySelector(`.tabAlt[data-tab="${activeTab}"]`);
    const targetContent = document.getElementById(activeTab);

    if (targetTab && targetContent) {
        targetTab.classList.add("active");
        targetContent.classList.add("active");
    }
}

// FAQ
document.querySelectorAll(".faqQuestion").forEach(q => {
    q.addEventListener("click", () => {
        const item = q.parentElement;
        item?.classList.toggle("active");
    });
});

// ==========================================
// 8. MICROINTERACCIÓN EN LA BOLSA
// ==========================================
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

// ==========================================
// 9. MICROINTERACCIÓN EN EL CORAZÓN
// ==========================================
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

/* =========================
        ONBOARDING
========================= */

const onboarding = document.getElementById("onboarding");
const onTitle = document.getElementById("onTitle");
const onText = document.getElementById("onText");
const onStep = document.getElementById("onStep");
const nextOnboarding = document.getElementById("nextOnboarding");

const onboardingSteps = [

{
    title: "Buscar productos",
    text: "Encuentra productos fácilmente usando la barra de búsqueda.",
    element: document.getElementById("searchHighlight")
},

{
    title: "Opciones de accesibilidad",
    text: "Activa modo oscuro, letra grande y teclado virtual.",
    element: document.getElementById("accessibilityBtn")
},

{
    title: "Wishlist",
    text: "Guarda productos para revisarlos más tarde.",
    element: document.getElementById("wishlistHighlight")
},

{
    title: "Mi cuenta",
    text: "Consulta pedidos, beneficios y configuraciones personales.",
    element: document.getElementById("accountHighlight")
}

];

let currentOnboarding = 0;

/* primera vez */
if(!localStorage.getItem("homeOnboardingSeen")){

    onboarding.classList.remove("hidden");

    updateOnboarding();

}

function updateOnboarding(){

    /* quitar highlights anteriores */
    document
    .querySelectorAll(".onboarding-highlight")
    .forEach(el=>{
        el.classList.remove("onboarding-highlight");
    });

    const step = onboardingSteps[currentOnboarding];

    onTitle.textContent = step.title;
    onText.textContent = step.text;

    onStep.textContent =
    `Paso ${currentOnboarding + 1} de ${onboardingSteps.length}`;

    /* highlight */
    step.element.classList.add("onboarding-highlight");

}

nextOnboarding.addEventListener("click", ()=>{

    currentOnboarding++;

    if(currentOnboarding >= onboardingSteps.length){

        onboarding.classList.add("hidden");

        document
        .querySelectorAll(".onboarding-highlight")
        .forEach(el=>{
            el.classList.remove("onboarding-highlight");
        });

        localStorage.setItem("homeOnboardingSeen", "true");

    }else{

        updateOnboarding();

    }

});

// ==========================================
// 10. FORMULARIO DE COMPRA (CHECKOUT)
// ==========================================
const btnBuyProduct = document.querySelector(".btnSecondary");
const btnBuyCart = document.querySelector(".bagCheckoutBtn");
const checkoutPanel = document.getElementById("checkoutPanel");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closePanelBtn = document.getElementById("closePanelBtn");
const closePanelBtnX = document.getElementById("closePanelBtnX");

function openCheckout() {
    checkoutPanel?.classList.add("active");
    checkoutOverlay?.classList.add("active");
    document.body.classList.add("modal-open");

    const firstInput = checkoutPanel?.querySelector("input");
    firstInput?.focus();
}

function closeCheckout() {
    checkoutPanel?.classList.remove("active");
    checkoutOverlay?.classList.remove("active");
    document.body.classList.remove("modal-open");
}

/* Abrir */
btnBuyProduct?.addEventListener("click", openCheckout);
btnBuyCart?.addEventListener("click", openCheckout);

/* Cerrar */
closePanelBtn?.addEventListener("click", closeCheckout);
closePanelBtnX?.addEventListener("click", closeCheckout);
checkoutOverlay?.addEventListener("click", closeCheckout);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && checkoutPanel?.classList.contains("active")) {
        closeCheckout();
    }
});