<?php
// echo print_r($_POST);

$email = $_POST['email'];
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$error = '';
if (trim($email) == '')
  $error = "Enter email";
 else if (trim($name) == '')
    $error = "Enter name";
  else if (trim($subject) == "")
   $error = "Enter sublect";
  else if (trim($message) == "")
   $error = "Enter message";

if($error != ''){
  echo $error;
  exit;
}

$subject = "=?utf-8?B?".base64_encode("Test")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";

mail('amax9111@gmail.com', $subject, $message, $headers);
header("Location:/contact.php");




?>
