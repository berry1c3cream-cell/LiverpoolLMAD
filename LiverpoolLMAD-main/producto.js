// =========================
// MÉTODOS DE ENTREGA
// =========================

const pickupOption = document.getElementById("pickupOption");
const homeOption = document.getElementById("homeOption");

let selectedDelivery = "pickup";

// CLICK & COLLECT
pickupOption.addEventListener("click", () => {

    pickupOption.classList.add("active");
    homeOption.classList.remove("active");

    selectedDelivery = "pickup";

});

// DOMICILIO
homeOption.addEventListener("click", () => {

    homeOption.classList.add("active");
    pickupOption.classList.remove("active");

    selectedDelivery = "home";

});

/* =========================
    ONBOARDING PRODUCTO
========================= */

const productOnboarding =
document.getElementById("productOnboarding");

const productOnTitle =
document.getElementById("productOnTitle");

const productOnText =
document.getElementById("productOnText");

const productOnStep =
document.getElementById("productOnStep");

const nextProductOnboarding =
document.getElementById("nextProductOnboarding");

const productSteps = [

{
    title: "Agregar a la bolsa",
    text: "Guarda este producto en tu bolsa para comprarlo más tarde.",
    element: document.getElementById("addBagHighlight")
},

{
    title: "Comprar ahora",
    text: "Finaliza tu compra rápidamente con un solo clic.",
    element: document.getElementById("buyNowBtn")
}

];

let currentProductStep = 0;

/* mostrar solo primera vez */
if(!localStorage.getItem("productOnboardingSeen")){

    productOnboarding.classList.remove("hidden");

    updateProductOnboarding();

}

function updateProductOnboarding(){

    /* limpiar highlights */
    document
    .querySelectorAll(".onboarding-highlight")
    .forEach(el=>{
        el.classList.remove("onboarding-highlight");
    });

    const step = productSteps[currentProductStep];

    productOnTitle.textContent = step.title;
    productOnText.textContent = step.text;

    productOnStep.textContent =
    `Paso ${currentProductStep + 1} de ${productSteps.length}`;

    step.element.classList.add("onboarding-highlight");

}

nextProductOnboarding.addEventListener("click", ()=>{

    currentProductStep++;

    if(currentProductStep >= productSteps.length){

        productOnboarding.classList.add("hidden");

        document
        .querySelectorAll(".onboarding-highlight")
        .forEach(el=>{
            el.classList.remove("onboarding-highlight");
        });

        localStorage.setItem(
            "productOnboardingSeen",
            "true"
        );

    }else{

        updateProductOnboarding();

    }

});


// =========================
// BOTÓN COMPRAR AHORA
// =========================

const buyNowBtn =
document.getElementById("buyNowBtn");

buyNowBtn.addEventListener("click", () => {

    // guardar elección
    localStorage.setItem(
        "deliveryMethod",
        selectedDelivery
    );

    // ir al checkout
    window.location.href =
    "checkout.html";

});

const deliveryOptions =
document.querySelectorAll(".deliveryCard");

deliveryOptions.forEach((option, index) => {

    option.addEventListener("click", () => {

        deliveryOptions.forEach(card => {
            card.classList.remove("active");
            card.setAttribute("aria-pressed", "false");
        });

        option.classList.add("active");
        option.setAttribute("aria-pressed", "true");
    });

    option.addEventListener("keydown", (e) => {

        if(e.key === "ArrowRight"){

            e.preventDefault();

            const next =
            deliveryOptions[
                (index + 1) % deliveryOptions.length
            ];

            next.focus();
            next.click();
        }

        if(e.key === "ArrowLeft"){

            e.preventDefault();

            const prev =
            deliveryOptions[
                (index - 1 + deliveryOptions.length)
                % deliveryOptions.length
            ];

            prev.focus();
            prev.click();
        }

    });

});