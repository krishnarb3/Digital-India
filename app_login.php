<?php
include 'connect.php';
$user=mysqli_real_escape_string($db_server,$_POST['user']);
$pass=mysqli_real_escape_string($db_server,$_POST['pass']);
$n=1;
$qry="SELECT password FROM StaffDetails WHERE username='".$_POST['user']."'";
$result=mysqli_query($db_server,$qry);
$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
if($row['password']==$pass)
{
	$n=0;
	$result=mysqli_query($db_server,$qry2);
	$_SESSION['username']=$user;
	$_SESSION['password']=$pass;
	echo "success";
}
if($n==1)
echo"failure".mysqli_error($db_server);
?>