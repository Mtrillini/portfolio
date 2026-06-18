<?php
require_once("../includes/auth.php");
?>

<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Panel </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/panel.css">
</head>

<body>

    <header class="header">
        <div class="header-bar"></div>
        <div class="header-content">
            <a href="../admin/panel.php" class="header-brand">
                <div class="header-logo">CDR</div>
                <span class="header-brand-name">Inicio</span>
            </a>

            <button class="menu-toggle" onclick="document.querySelector('.nav').classList.toggle('open')"
                aria-label="Menú">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            <nav class="nav">
                <a href="../admin/panel.php">Inicio</a>
                <a href="../public/pacientes.php">Pacientes</a>
                <a href="../public/obras_sociales.php">Obras Sociales</a>
                <a href="turnos.php">Turnos</a>
                <a href="agenda.php">Agenda</a>
                <a href="../public/logout.php" class="nav-logout">Salir</a>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="welcome">
            <h2>Bienvenido al panel</h2>
            <p>Desde acá podés administrar pacientes, turnos y la agenda diaria/mensual.</p>
        </div>

        <div class="cards">
            <a href="../public/pacientes.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Pacientes</h3>
                    <p>Gestionar fichas y datos de pacientes.</p>
                </div>
            </a>

            <a href="../public/turnos.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Turnos</h3>
                    <p>Asignar y consultar turnos del centro.</p>
                </div>
            </a>

            <a href="../public/medicos.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Médicos</h3>
                    <p>Gestionar médicos y sus especialidades.</p>
                </div>
            </a>

            <a href="../public/especialidades.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Especialidades</h3>
                    <p>Administrar especialidades médicas del centro.</p>
                </div>
            </a>

            <a href="../public/obras_sociales.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Obras Sociales</h3>
                    <p>Cargá los datos de la cobertura para registrarla.</p>
                </div>
            </a>

            <a href="../public/agenda.php" class="card">
                <div class="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>
                <div class="card-body">
                    <h3>Agenda</h3>
                    <p>Vista diaria y mensual de la agenda.</p>
                </div>
            </a>
        </div>
    </div>

</body>

</html>