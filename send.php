<?php 
	echo '<link href="/production/css/send.css" rel="stylesheet" >';
	echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800">';
	echo '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">';

	if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

	$name     	= $_POST['name'];
    $email    	= $_POST['email'];
    $message 	= $_POST['message'];
    $error		= '';

	$address = "stefanbobrowski1@gmail.com";

	$e_subject = 'New message from ' . $name . ', ' . ', ' . $email  . '.';

	$e_body = "stefanbobrowski.com You have a new message from: $name, $email" . PHP_EOL . PHP_EOL;
	$e_content = "Message: $message" . PHP_EOL . PHP_EOL;
	$e_reply = "You can contact $name via email: $email";

	$msg = wordwrap($e_body . $e_content . $e_reply,70);

	$headers = "From: $email" . PHP_EOL;
	$headers .= "Reply-To: $email" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;
	   
	if(mail($address, $e_subject, $msg, $headers)) {
		echo '<div class="send-page">';
		echo '<h1>Your message has been sent to Stefan Bobrowski!</h1>';
		echo '<p>He will get back to you shortly!</p>';
		echo '<p>Redirecting back to stefanbobrowski.com in...<span id="redirect-timer">5</span></p>';
		echo '</div>';
		echo '<script> 
				var redirectTimer = document.getElementById("redirect-timer"); 
				var timeLeft = 5;
				var redirectFunction = setInterval(function() {
					timeLeft--;
					redirectTimer.innerHTML = timeLeft;
					if(timeLeft <= 0) {
						clearInterval(redirectFunction);
					}
				}, 1000); 

				setTimeout(function() { 
					window.location = "http://stefanbobrowski.com";
				}, 5000); 				
			  </script>';
	}
?>