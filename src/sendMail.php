<?php
    
echo "<pre>";

    print_r($_POST);
echo '</pre>';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $myMail = "tymoteusz.strozniak@gmail.com";
    $subject = "WIADOMOŚĆ ZE MOJEJ STRONY WWW";
    $body = ""; 

    $body .= "Wiadomość od: ".$name."\r\n";
    $body .= "e-mail: ".$email."\r\n";
    $body .= "Treść wiadomości: ".$name."\r\n";

    mail($myMail,$subject,$body);

?>