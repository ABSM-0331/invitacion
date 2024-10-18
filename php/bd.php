<?php
// Configuración de conexión a la base de datos
$servername = "localhost";
$username = "root";  // Cambiar si tu usuario es diferente
$password = "";      // Cambiar si tienes una contraseña establecida
$dbname = "mi_base_de_datos";

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión exitosa.<br>";
 
// Insertar 300 registros
for ($i = 1; $i <= 300; $i++) {
    // Datos aleatorios para el registro
    $nombre = "Usuario_$i";
    $email = "usuario_$i@example.com";
    $telefono = "555-" . str_pad($i, 7, "0", STR_PAD_LEFT); // Genera un número de teléfono único

    // Consulta SQL de inserción
    $sql = "INSERT INTO mi_tabla (nombre, email, telefono) VALUES ('$nombre', '$email', '$telefono')";

    // Ejecutar la consulta
    if ($conn -> query($sql) === TRUE) {
        echo "Registro $i insertado correctamente.<br>";
    } else {
        echo "Error al insertar el registro $i: " . $conn->error . "<br>";
    }
}

// Cerrar la conexión
$conn->close();

echo "Inserción completada.";
?>
