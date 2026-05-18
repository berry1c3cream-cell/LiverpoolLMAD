// carousel
const wrappers = document.querySelectorAll(".carousel-wrapper");

wrappers.forEach(wrapper => {

    const carousel = wrapper.querySelector(".carousel");
    const leftBtn = wrapper.querySelector(".left");
    const rightBtn = wrapper.querySelector(".right");

    /* botones */
    rightBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left:320,
            behavior:"smooth"
        });
    });

    leftBtn.addEventListener("click", () => {
        carousel.scrollBy({
            left:-320,
            behavior:"smooth"
        });
    });

    /* teclado */
    carousel.addEventListener("keydown", (e) => {

        if(e.key === "ArrowRight"){
            e.preventDefault();

            carousel.scrollBy({
                left:320,
                behavior:"smooth"
            });
        }

        if(e.key === "ArrowLeft"){
            e.preventDefault();

            carousel.scrollBy({
                left:-320,
                behavior:"smooth"
            });
        }

    });

});


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


accBtn.addEventListener("click", () => {

    accPanel.classList.toggle("show");

    /* mover foco al primer input */
    if(accPanel.classList.contains("show")){

        const firstInput = accPanel.querySelector("input");

        firstInput.focus();
    }

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        accPanel.classList.remove("show");

        accBtn.focus();
    }

});

const expanded =
accPanel.classList.contains("show");

accBtn.setAttribute(
"aria-expanded",
expanded
);


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
//const tabs = document.querySelectorAll(".tabAlt")
//const contents = document.querySelectorAll(".tabContent")

//tabs.forEach(tab=>{
//tab.addEventListener("click",()=>{

//tabs.forEach(t=>t.classList.remove("active"))
//contents.forEach(c=>c.classList.remove("active"))

//tab.classList.add("active")

//document
//.getElementById(tab.dataset.tab)
//.classList.add("active")

//})
//})

// abrir tab desde URL
const params = new URLSearchParams(window.location.search);
const activeTab = params.get("tab");

if(activeTab){

    tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
    });

    contents.forEach(c => {
        c.classList.remove("active");
    });

    // buscar por aria-controls
    const targetTab = document.querySelector(
        `.tabAlt[aria-controls="${activeTab}"]`
    );

    const targetContent =
    document.getElementById(activeTab);

    if(targetTab && targetContent){

        targetTab.classList.add("active");

        targetTab.setAttribute(
            "aria-selected",
            "true"
        );

        targetContent.classList.add("active");
    }
}

// faq
document.querySelectorAll(".faqQuestion").forEach(q => {

    q.addEventListener("click", () => {

        const item = q.parentElement;

        item.classList.toggle("active");

        // aria
        const expanded =
        q.getAttribute("aria-expanded") === "true";

        q.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

});

const tabs = document.querySelectorAll(".tabAlt");
const contents = document.querySelectorAll(".tabContent");

tabs.forEach((tab, index) => {

    // CLICK
    tab.addEventListener("click", () => {

        // limpiar tabs
        tabs.forEach(t => {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
        });

        // limpiar contenidos
        contents.forEach(c => {
            c.classList.remove("active");
        });

        // activar actual
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // mostrar panel correcto
        const target = tab.getAttribute("aria-controls");

        document
        .getElementById(target)
        .classList.add("active");
    });

    // TECLADO
    tab.addEventListener("keydown", (e) => {

        // derecha
        if(e.key === "ArrowRight"){

            e.preventDefault();

            const next =
            tabs[(index + 1) % tabs.length];

            next.focus();
            next.click();
        }

        // izquierda
        if(e.key === "ArrowLeft"){

            e.preventDefault();

            const prev =
            tabs[
                (index - 1 + tabs.length)
                % tabs.length
            ];

            prev.focus();
            prev.click();
        }

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
const btnBuyCart = document.querySelector(".bagCheckoutBtn");
const checkoutPanel = document.getElementById("checkoutPanel");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closePanelBtn = document.getElementById("closePanelBtn");
const closePanelBtnX = document.getElementById("closePanelBtnX");

function openCheckout() {

    checkoutPanel?.classList.add("active");
    checkoutOverlay?.classList.add("active");

    document.body.classList.add("modal-open");

    const firstInput =
    checkoutPanel?.querySelector("input");

    firstInput?.focus();
}

function closeCheckout() {

    checkoutPanel?.classList.remove("active");
    checkoutOverlay?.classList.remove("active");

    document.body.classList.remove("modal-open");
}

/* abrir */

btnBuyProduct?.addEventListener("click", openCheckout);

btnBuyCart?.addEventListener("click", openCheckout);

/* cerrar */

closePanelBtn?.addEventListener(
"click",
closeCheckout
);

closePanelBtnX?.addEventListener(
"click",
closeCheckout
);

checkoutOverlay?.addEventListener(
"click",
closeCheckout
);

document.addEventListener("keydown", (e) => {

    if(
        e.key === "Escape" &&
        checkoutPanel?.classList.contains("active")
    ){

        closeCheckout();
    }
});


// ==========================================
// VALIDACIÓN Y REGISTRO - CREAR CUENTA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("regPassword");
    const emailInput = document.getElementById("regEmail");
    const btnRegister = document.getElementById("btnRegister");

    const paramLength = document.getElementById("paramLength");
    const paramMayus = document.getElementById("paramMayus");
    const paramNumber = document.getElementById("paramNumber");
    const paramSpecial = document.getElementById("paramSpecial");

    // Verificar si estamos en la página de Crear Cuenta
    if (passwordInput && btnRegister) {
        
        // Escuchar cada que el usuario escribe en la contraseña
        passwordInput.addEventListener("input", () => {
            const val = passwordInput.value;

            // 1. Mínimo 8 caracteres
            if (val.length >= 8) paramLength.classList.add("valid");
            else paramLength.classList.remove("valid");

            // 2. Una mayúscula
            if (/[A-Z]/.test(val)) paramMayus.classList.add("valid");
            else paramMayus.classList.remove("valid");

            // 3. Un número
            if (/[0-9]/.test(val)) paramNumber.classList.add("valid");
            else paramNumber.classList.remove("valid");

            // 4. Signo especial
            if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val)) paramSpecial.classList.add("valid");
            else paramSpecial.classList.remove("valid");
        });

        // Evento al dar clic en CREAR CUENTA
        btnRegister.addEventListener("click", () => {
            const isLengthValid = paramLength.classList.contains("valid");
            const isMayusValid = paramMayus.classList.contains("valid");
            const isNumberValid = paramNumber.classList.contains("valid");
            const isSpecialValid = paramSpecial.classList.contains("valid");

            if (!emailInput.value) {
                alert("Por favor ingresa un correo electrónico.");
                return;
            }

            if (!isLengthValid || !isMayusValid || !isNumberValid || !isSpecialValid) {
                alert("Tu contraseña aún no cumple con todos los filtros de seguridad.");
                return;
            }

            // Crear el objeto del usuario nuevo
            const nuevoUsuario = {
                correo: emailInput.value,
                contrasena: passwordInput.value
            };

            // Guardar en el LocalStorage (Backend Falso)
            let usuariosRegistrados = JSON.parse(localStorage.getItem("db_usuarios")) || [];
            usuariosRegistrados.push(nuevoUsuario);
            localStorage.setItem("db_usuarios", JSON.stringify(usuariosRegistrados));

            alert("¡Cuenta creada exitosamente en el backend falso!");
            
            // Forzar redirección directa
            window.location.href = "Campos.html";
        });
    }
});