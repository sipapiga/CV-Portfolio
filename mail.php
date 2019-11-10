<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
   

$formcontent="From: $name \n $phone \n Message: $message";
$recipient = "Sipapat.Prasopsap@yh.nackademin.se";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
    echo "<p>Thank You!</p>";
} 
}else {
    echo '<p>Something went wrong</p>';
}

?>
