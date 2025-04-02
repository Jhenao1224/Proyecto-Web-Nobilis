document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrar-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar campos
        if (nombre === "" || apellido === "" || email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Guardar datos en localStorage
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        };
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

        alert("Registro exitoso. Bienvenido " + nombre + "!");
        document.getElementById("registro-form").reset(); // Limpiar el formulario

    });
});   