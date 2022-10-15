<?php
    session_start();

    if(!isset($_SESSION['cedula'])){
        header("location: index.php");
        session_destroy();
        die();
    };
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href="assets/css/ventana1/estilo.css">
    <link rel = "stylesheet" href="../../assets/css/ventana1/estilo.css">
    <title>monocuco</title>
</head>
<body>
    <div class="cajita">
        <a href="../../php/cerrar_sesion.php">Cerrar Sesion</a>
    </div>
    
</body>
</html>