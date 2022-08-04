<?php


$remitente = remintente@hotmail.com;
$destinatario = "chocorroloromonlvx@hotmail.com";
$asunto = "Te contactaron en el formulario de tu sitio web";
$mensaje = "Tienes un mensaje desde el formulario de tu sitio web";
$headers = "From: $remitente\r\nReply-to: $remitente";

mail($destinatario, $asunto, $mensaje, $headers);

?>