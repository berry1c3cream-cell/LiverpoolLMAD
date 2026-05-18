
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

            
            // Forzar redirección directa
            window.location.href = "Campos.html";
        });
    }
});