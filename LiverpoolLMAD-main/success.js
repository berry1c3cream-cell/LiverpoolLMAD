const method =
localStorage.getItem("deliveryMethod");

const deliveryResult =
document.getElementById("deliveryResult");

if(method === "pickup"){

    deliveryResult.innerHTML = `

        <div class="deliveryCard active">

            <h3>
                🏬 Recoger en tienda
            </h3>

            <p>
                Liverpool Monterrey Valle
            </p>

        </div>

    `;

}else{

    deliveryResult.innerHTML = `

        <div class="deliveryCard active">

            <h3>
                🚚 Envío a domicilio
            </h3>

            <p>
                Llegará mañana antes de las 9pm
            </p>

        </div>

    `;

}