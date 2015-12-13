<?php
	session_start();
	$db_hostname="localhost";
	$db_username="root";
	$db_password="mreva747";
	$db_database="censusx";
	$db_server=mysqli_connect($db_hostname,$db_username,$db_password) or die("Unable to connect to server");
	mysqli_select_db($db_server,$db_database) or die("Unable to connect to mysql");
?>		