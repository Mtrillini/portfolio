<?php
require_once(__DIR__ . "/../../includes/auth.php");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="/centro/admin/css/panel.css">
</head>
<header class="header">
    <div class="header-bar"></div>
    <div class="header-content">
        <div class="header-brand">
            <span class="badge">Panel</span>
        </div>

        <nav class="nav">
           <a href="../admin/panel.php">Inicio</a>
            <a href="pacientes.php">Pacientes</a>
            <a href="obras_sociales.php">Obras Sociales</a>
            <a href="medicos.php">Médicos</a>
            <a href="especialidades.php">Especialidades</a>
            <a href="turnos.php">Turnos</a>
            <a href="agenda.php">Agenda</a>
            <a href="logout.php" class="nav-logout">Salir</a>
        </nav>
    </div>
</header>
</div>
</body>

</html>