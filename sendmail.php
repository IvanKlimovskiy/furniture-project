<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('klimoffsky2707@yandex.ru', 'Заявка');
$mail->addAddress('klimoffsky27@gmail.com');
$mail->Subject = 'Поступил заказ';

$body = '<h1>Поступила заявка на обратную связь</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['number']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['number'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Пожалуйста свяжитесь через чат или попробуйте позже';
} else {
    $message = 'Ваша заявка принята, мы Вам скоро перезвоним.';
}

$response = ['message' => $message];

header('Content-Type: application/json');
echo json_encode($response);

?>
