<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['correo'];
    $telefono=$_POST['telefono'];
    $mensaje=$_POST['mensaje'];
	$asunto = 'Formulario pagina';
	$correo = "Nombre: $nombre <br> Email: $email<br> telefono: $telefono <br><br> Mensaje: $mensaje"


	if(mail('tuEmail', $asunto, $mensaje)){
		echo "<script> alert('Correo enviado'); </script>";
	}
 ?>