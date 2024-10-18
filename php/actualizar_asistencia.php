<?php
// Conexión a la base de datos
$host = 'localhost';
$dbname = 'boda';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar si se enviaron los datos por POST
    if (isset($_POST['apellido']) && isset($_POST['num_asistentes']) && isset($_POST['asistencia'])) {
        $apellido = $_POST['apellido'];
        $num_asistentes = (int)$_POST['num_asistentes'];
        $asistencia = $_POST['asistencia'];  // 1 para asistencia confirmada, 0 para no asistir
        
        // Actualizar la base de datos
        $sql = "UPDATE invitados SET num_invitados_confirmados = :num_asistentes, status = :asistencia WHERE apellido = :apellido";
        // var_dump($asistencia);
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':num_asistentes', $num_asistentes, PDO::PARAM_INT);
        $stmt->bindParam(':asistencia', $asistencia, PDO::PARAM_STR);
        $stmt->bindParam(':apellido', $apellido, PDO::PARAM_STR);

        if ($stmt->execute()) {
            echo json_encode(['status' => 'success', 'message' => 'Asistencia confirmada.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Error al confirmar la asistencia.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Datos incompletos.']);
    }

} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Error en la conexión: ' . $e->getMessage()]);
}
?>
