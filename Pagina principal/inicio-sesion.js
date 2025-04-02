document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-btn").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        // Validar campos
        if (email === "" || password === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Verificar si el usuario está registrado
        let usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
        if (usuarioRegistrado && usuarioRegistrado.email === email && usuarioRegistrado.password === password) {
            alert("Inicio de sesión exitoso. Bienvenido " + usuarioRegistrado.nombre + "!");
            window.location.href = "Principal.html"; // Redirigir a la página principal
        } else {
            alert("Credenciales incorrectas. Por favor, intenta nuevamente.");
        }
    });
});