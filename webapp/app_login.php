<?php
	include 'connect.php';	
	$user=mysqli_real_escape_string($db_server,$_POST['user']);
	$pass=mysqli_real_escape_string($db_server,$_POST['pass']);
	if((!is_null($_POST['user'])and(!is_null($_POST['pass'])))) {
		$n='failure';
		$login_query="SELECT password FROM StaffDetails WHERE username='".$_POST['user']."'";
		$login_result=mysqli_query($db_server,$login_query);
		$row=mysqli_fetch_array($login_result,MYSQLI_ASSOC);
		if($row['password']==$pass)
		{
			$n='success';
			$_SESSION['username']=$user;
			$_SESSION['password']=$pass;
		}
	}
	else 
	{	
		$n='BadData';
	}
	if($n=='failure') {
		$resp = [
			'login'=>'failure',
			'location'=>''
			];
			echo json_encode($resp);

	}
	elseif ($n == 'success') {
		$family_result = '';
		$location_query = "SELECT location FROM LocationDetails WHERE username='".$user."'";
		$location_result = mysqli_query($db_server,$location_query);
		$row=mysqli_fetch_array($location_result,MYSQLI_ASSOC);
		$street_query = "SELECT DISTINCT(street) FROM StreetDetails WHERE location='".$row['location']."'";
		$street_result = mysqli_query($db_server,$street_query);
		echo '{"login":"success","location":"Mambalam-west","streets":';
		$num1=1;
		$encode = array();
		while($row = mysqli_fetch_assoc($street_result)) {
			$num2=1;
   			$encode['street'.$num1][] = $row['street'];
			$family_query = "SELECT familyid FROM StreetDetails WHERE street ='".$row['street']."'"; 
			$family_result = mysqli_query($db_server,$family_query);
			while($family = mysqli_fetch_array($family_result,MYSQLI_ASSOC)) {
				$encode['street'.$num1][$row['street']] = $family['familyid'];
				$num2 = $num2 +1;
			}
			$num1=$num1+1;
			
			
		}
		echo json_encode($encode);
		/*
		while($street = mysqli_fetch_array($street_result,MYSQLI_ASSOC)) {
			echo '{"street'.$num1.'":"'.$street['street'].'",';
			echo '"familyids":[';
			$family_query = "SELECT familyid FROM StreetDetails WHERE street ='".$street['street']."'"; 
			$family_result = mysqli_query($db_server,$family_query);
			$num2=1;
			while ($family = mysqli_fetch_array($family_result,MYSQLI_ASSOC)) {
				echo '{"familyid'.$num2.'":"'.$family['familyid'].'"},';
				$num2 = $num2 + 1;
			}
			echo '],},';
			$num1 = $num1 + 1;
		}
		echo ']}';*/
	}
	else {
	$resp = [
		'login'=>'Bad Data',
		'location'=>''
		];
		echo json_encode($resp);

	}
?>