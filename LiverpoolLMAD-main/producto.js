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