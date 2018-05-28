<?php

 if(isset($_POST['con_form'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

	//=========================*********============================

	$to = 'sandwichtheme@gmail.com'; // Replace Your Email

	//=========================*********============================


	$subject = "Message Form:  $name";
	$email_message = "
		<h4>You have received a new message From your Website</h4><br/>
		<h5>Here are the details:</h5><br/><br/>
		<strong>Name:</strong> <p>$name</p><br/>
		<strong>Email:</strong> <p>$email</p><br/>
		<strong>Message:</strong> <p>$message</p><br/>
	";

	// create email headers
	$headers = 'From: '.$email."\r\n".
	'Reply-To: '.$email."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($to, $subject, $email_message, $headers);
 }

?>
