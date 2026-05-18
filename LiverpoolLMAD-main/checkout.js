// =========================
// CHECKOUT DINÁMICO
// =========================

const method =
localStorage.getItem("deliveryMethod");

const deliveryContent =
document.getElementById("deliveryContent");

const finishPurchaseBtn =
document.getElementById("finishPurchaseBtn");

// evita errores si el div no existe
if(deliveryContent){

    if(method === "pickup"){

        deliveryContent.innerHTML = `

            <h2 class="checkoutTitle">
                Recoger en tienda
            </h2>

            <div class="deliveryCard active">

                <h3>
                    📍 Liverpool Monterrey Valle
                </h3>

                <p>
                    Disponible hoy
                </p>

            </div>

            <div class="fakeMap"></div>

        `;

    }else{

        deliveryContent.innerHTML = `

            <h2 class="checkoutTitle">
                Entrega a domicilio
            </h2>

            <div class="deliveryCard active">

                <h3>
                    🚚 Dirección principal
                </h3>

                <p>
                    Llega mañana antes de las 9pm
                </p>

            </div>

        `;

    }

}

finishPurchaseBtn.addEventListener("click", () => {

    window.location.href =
    "success.html";

});