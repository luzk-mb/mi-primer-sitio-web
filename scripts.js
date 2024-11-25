// Validación del formulario de contacto
document.getElementById("contacto-form").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const motivo = document.getElementById("motivo").value;
    const email = document.getElementById("email").value;

    // Validar que los campos no estén vacíos
    if (!nombre || !motivo || !email) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault(); // Evitar el envío del formulario
    } else {
        alert("Formulario enviado con éxito.");
    }
});
