<?php
include 'connect.php';
echo $_POST['user'];
echo $_POST['pass'];
if((!is_null($_POST['user'])) and (!is_null($_POST['pass']))) {

	$user=mysqli_real_escape_string($db_server,$_POST['user']);
	$pass=mysqli_real_escape_string($db_server,$_POST['pass']);
	$n='failure';
	$qry="SELECT password FROM StaffDetails WHERE username='".$_POST['user']."'";
	$result=mysqli_query($db_server,$qry);
	$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
	if($row['password']==$pass)
	{
		$n='success';
		$_SESSION['username']=$user;
		$_SESSION['password']=$pass;
		header("Location:room.php");
	}
	if($n==1)
echo "Incorrect password";

}
else 
echo 'Bad Data';
echo $_POST['user'];
echo $_POST['pass'];
?>