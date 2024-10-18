
document.getElementById('buscar-invitados').addEventListener('click', function(event) {
    // Evita el envío normal del formulario
    event.preventDefault();

    // Obtén el valor del apellido
    var apellido = document.getElementById('apellido').value;

    // Verifica que el campo no esté vacío
    if (apellido.trim() === '') {
        alert("Por favor, ingresa un apellido.");
        return;
    }

    // Realiza la llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/buscar_invitados.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Coloca la respuesta en el div
            document.getElementById('resultado-busqueda').innerHTML = xhr.responseText;
        }
    };
    // Envía los datos
    xhr.send("apellido=" + encodeURIComponent(apellido));
});