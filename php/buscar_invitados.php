<?php
// Conexión a la base de datos
$host = 'localhost';
$dbname = 'boda';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if (isset($_POST['apellido'])) {
        $apellido = $_POST['apellido'];
        // Consulta SQL para buscar por apellido
        $stmt = $pdo->prepare("SELECT * FROM invitados WHERE apellido = :apellido");
        $stmt->bindParam(':apellido', $apellido, PDO::PARAM_STR);
        $stmt->execute();
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($resultados) > 0) {
        // Si hay resultados, muestra el maximo de invitados
			foreach ($resultados as $fila) {
            
            echo 
            "<div id='numero-asistentes' class='form-group'>
                <label for='asistentes' class='texto-datos'>Número de Asistentes:</label><br>
                <button type='button' class='aumentar' onclick='decreaseValue()'>-</button>
                <input type='number' id='asistentes' value='" . $fila['num_invitados'] . "' name='asistentes' min='1' max='" . $fila['num_invitados'] . "' required class='numero'>
                <button type='button' class='aumentar' onclick='aumentarValor()'>+</button>
            </div>";
        }

        } else {
            // Si no hay resultados, mostrar mensaje
            echo "Lo siento, " . htmlspecialchars($apellido) ."no se encuentra en la lista de invitados";
        }
    }
} catch (PDOException $e) {
    echo "Error en la conexión: " . $e -> getMessage();
}
?>
