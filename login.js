// ==========================================
// CÓDIGO EXCLUSIVO PARA INICIO DE SESIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    const btnLogin = document.getElementById("btnLogin");

    btnLogin?.addEventListener("click", () => {
        const correoIngresado = emailInput.value.trim();
        const contrasenaIngresada = passwordInput.value;

        // 1. Validar que los campos no estén vacíos
        if (!correoIngresado || !contrasenaIngresada) {
            alert("Por favor, ingresa tu correo y contraseña.");
            return;
        }

        // 2. Solicitar los usuarios registrados de la base de datos (LocalStorage)
        const usuariosRegistrados = JSON.parse(localStorage.getItem("db_usuarios")) || [];

        // 3. Buscar si existe coincidencia exacta
        const usuarioValido = usuariosRegistrados.find(user => 
            user.correo.toLowerCase() === correoIngresado.toLowerCase() && 
            user.contrasena === contrasenaIngresada
        );

        // 4. Evaluar resultado
        if (usuarioValido) {
            alert("¡Inicio de sesión exitoso!");
            // Te manda a la ventana principal
            window.location.href = "home.html"; 
        } else {
            alert("El correo electrónico o la contraseña son incorrectos.");
        }
    });
});