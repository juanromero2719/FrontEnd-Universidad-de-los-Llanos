<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $celular = htmlspecialchars($_POST['celular']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'juanromero2719@gmail.com';                     //SMTP username
    $mail->Password   = 'nrgtwincawxlsctg';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;     
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                               //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('juanromero2719@gmail.com', 'Juan Romero');
    $mail->addAddress('juanromero2719@gmail.com');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Nuevo mensaje de formulario';
    $mail->Body    = "<h2>Nuevo mensaje de formulario</h2>
                      <p><strong>Nombre y apellidos:</strong> $nombre</p>
                      <p><strong>Correo electrónico:</strong> $correo</p>
                      <p><strong>Celular:</strong> $celular</p>
                      <p><strong>Mensaje:</strong><br>$mensaje</p>";

    $mail->send();
    header('Location: index.html');
    exit;
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}