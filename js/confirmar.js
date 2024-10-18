
function confirmarAsistencia() {
    // Obtener los valores de los inputs
    var apellido = document.getElementById('apellido').value;
    var num_asistentes = document.getElementById('asistentes').value;
    var asistencia = document.querySelector('input[name="asistencia"]:checked').value;

    // Validar que se haya seleccionado una opción de asistencia y que el apellido no esté vacío
    if (apellido === '' || asistencia === undefined) {
        alert('Por favor, ingrese todos los datos requeridos.');
        return;
    }
    if(confirm("Esta seguro de confirmar asistencia para la familia "+apellido)){
        // Enviar los datos a través de AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/actualizar_asistencia.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'success') {
                    alert(response.message); // Mensaje de éxito
                } else {
                    alert(response.message); // Mensaje de error
                }
            } else {
                alert('Hubo un problema con la solicitud.');
            }
        };

        //si se selecciona que no asistira el numero de invitados sera "0"
        if(asistencia === "no") num_asistentes = 0;
        var data = 'apellido=' + encodeURIComponent(apellido) +
                '&num_asistentes=' + encodeURIComponent(num_asistentes) +
                '&asistencia=' + encodeURIComponent(asistencia);
        
        xhr.send(data); // Enviar los datos al archivo PHP
    }
    else{
        alert("Verifique sus datos");
    }
}

// Asignar la función al botón de confirmación
document.querySelector('.btn-confirmar').addEventListener('click', function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe normalmente
    confirmarAsistencia();   // Llamar a la función de AJAX
});