<?php
    //create an array
	$n=0;
	$m=0;
    $emparray = array();
    while($n<5)
    {
    	$m=0;
        $emparray[] = array();
        while($m<5)
        {
        	$emparray[][] = $m;
        	$m=$m+1;
        }
        $n=$n+1;
    }
    echo json_encode($emparray,true);
?>