function validateLoginForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validar las credenciales aquí
    if (username === "root" && password === "root") { // Ejemplo de credenciales válidas
        var saldo = Math.floor(Math.random() * 10000) + 1; // Saldo aleatorio

        window.location.href = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function validateRegisterForm(event) {
    event.preventDefault();

    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validar el formulario de registro aquí

    // Si los datos son válidos, puedes crear la cuenta y redirigir al usuario a la página de inicio de sesión
    alert("Cuenta creada exitosamente. Por favor, inicia sesión.");
    window.location.href = "login.html";
}

