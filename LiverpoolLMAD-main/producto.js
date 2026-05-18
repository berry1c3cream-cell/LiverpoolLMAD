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