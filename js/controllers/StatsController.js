
app.controller('StatsController', ['$scope', 'dataReceiver',  StatsController]);



function StatsController($scope, dataReceiver) {
  

 	
	 	dataReceiver.success(function(data) {
	    
	    $scope.content= data;
	    console.log("content inside dunc", JSON.stringify($scope.content));

	    $scope.entireData = JSON.stringify($scope.content);
		$scope.entireData = JSON.parse($scope.entireData);


		//for age pie chart
		$scope.age = function(){

			var category = {
				"1-8": 0,
				"9-18":0,
				"19-29":0,
				"30-50":0,
				"51-75":0,
				"76-100":0,
			};

			for(var family of $scope.entireData){
				if(family.age>=1 && family.age<=8){
					category["1-8"]++;
				}
				else if(family.age>=9 && family.age<=18){
					category["9-18"]++;
				}
				else if(family.age>=19 && family.age<=29){
					category["19-29"]++;
				}
				else if(family.age>=30 && family.age<=50){
					category["30-50"]++;
				}
				else if(family.age>=51 && family.age<=75){
					category["51-75"]++;
				}
				else if(family.age>=76 && family.age<=100){
					category["76-100"]++;
				}


			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"agecategory": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'agecategory",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}

		$scope.age = $scope.age();
		$scope.age = JSON.parse($scope.age);

		//for disability pie chart
		$scope.disability = function(){

			var category = {
				"sight": 0,
				"hear":0,
				"speech":0,
				"mental":0,
				"none":0
			};

			for(var family of $scope.entireData){
				if(family.disability == "sight"){
					category["sight"]++;
				}
				else if(family.disability == "hear"){
					category["hear"]++;
				}
				else if(family.disability == "speech"){
					category["speech"]++;
				}
				else if(family.disability == "mental"){
					category["mental"]++;
				}
				else if(family.disability == "none"){
					category["none"]++;
				}

			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"disabilitytype": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'disabilitytype",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.disability = $scope.disability();
		$scope.disability = JSON.parse($scope.disability);


		//for education pie chart
		$scope.education = function(){

			var category = {
				"school": 0,
				"college":0,
				"degree":0,
				"doctorate":0
			};

			for(var family of $scope.entireData){
				if(family.educaltionLevel == "school"){
					category["school"]++;
				}
				else if(family.educaltionLevel == "college"){
					category["college"]++;
				}
				else if(family.educaltionLevel == "degree"){
					category["degree"]++;
				}
				else if(family.educaltionLevel == "doctorate"){
					category["doctorate"]++;
				}

			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"educationLevel": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'educationLevel",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.education = $scope.education();
		$scope.education = JSON.parse($scope.education);


		//for religion pie chart
		$scope.religion = function(){

			var category = {
				"hindu": 0,
				"muslim":0,
				"christian":0,
				"sikh":0
			};

			for(var family of $scope.entireData){
				if(family.religion == "hindu"){
					category["hindu"]++;
				}
				else if(family.religion == "muslim"){
					category["muslim"]++;
				}
				else if(family.religion == "christian"){
					category["christian"]++;
				}
				else if(family.religion == "sikh"){
					category["sikh"]++;
				}

			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"religion": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'religion",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.religion = $scope.religion();
		$scope.religion = JSON.parse($scope.religion);


		//for maritalStatus pie chart
		$scope.marital = function(){

			var category = {
				"unmarried": 0,
				"married":0,
				"widowed":0,
				"divorced":0
			};

			for(var family of $scope.entireData){
				if(family.maritalStatus == "unmarried"){
					category["unmarried"]++;
				}
				else if(family.maritalStatus == "married"){
					category["married"]++;
				}
				else if(family.maritalStatus == "widowed"){
					category["widowed"]++;
				}
				else if(family.maritalStatus == "divorced"){
					category["divorced"]++;
				}

			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"maritalStatus": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'maritalStatus",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.marital = $scope.marital();
		$scope.marital = JSON.parse($scope.marital);

		//for motherTongue pie chart
		$scope.mother = function(){

			var category = {
				"hindi": 0,
				"tamil":0,
				"telugu":0,
				"kannada":0,
				"other":0
			};

			for(var family of $scope.entireData){
				if(family.motherTongue == "hindi"){
					category["hindi"]++;
				}
				else if(family.motherTongue == "tamil"){
					category["tamil"]++;
				}
				else if(family.motherTongue == "telugu"){
					category["telugu"]++;
				}
				else if(family.motherTongue == "kannada"){
					category["kannada"]++;
				}
				else if(family.motherTongue == "other"){
					category["other"]++;
				}

			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"motherTongue": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'motherTongue",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.mother = $scope.mother();
		$scope.mother = JSON.parse($scope.mother);

		//for sex pie chart
		$scope.sex = function(){

			var category = {
				"male": 0,
				"female":0,
				"other":0
			};

			for(var family of $scope.entireData){
				if(family.sex == "male"){
					category["male"]++;
				}
				else if(family.sex == "female"){
					category["female"]++;
				}
				else if(family.sex == "other"){
					category["other"]++;
				}
			}


			
			var string = '{ "type": "pie", "theme": "light", "dataProvider": [ ';
					


	  			for(var key in category){
	  				string += '{"sex": "' + key + '","value": ' + category[key] + '},';
	  			}

	  			string = string.slice(0,-1);

	  			string += '], "valueField": "value", "titleField": "' + 'sex",';

	  			string += '"outlineAlpha": 0.4, "depth3D": 15, "balloonText": "", "angle": 30, "export": { "enabled": true } }';



	  		return string;
		}
		$scope.sex = $scope.sex();
		$scope.sex = JSON.parse($scope.sex);
	  });  


	// data to be in this format

  	/*$scope.content =  {
  				"type": "pie",
  				"theme": "light",
  				"dataProvider": [ {
  			    "country": "Lithuania",
  			    "value": 260
			  }, {
			    "country": "Ireland",
			    "value": 201
			  }, {
			    "country": "Germany",
			    "value": 65
			  }, {
			    "country": "Australia",
			    "value": 39
			  }, {
			    "country": "UK",
			    "value": 19
			  }, {
			    "country": "Latvia",
			    "value": 10
			  } ],
			  "valueField": "value",
			  "titleField": "country",
			  "outlineAlpha": 0.4,
			  "depth3D": 15,
			  "balloonText": "",
			  "angle": 30,
			  "export": {
			    "enabled": true
			  }
			};*/  // sample content


	//format of data to be fetched from server
	$scope.sample = 
		[
		{
			"familyId": "1",
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "male",
			"dob": "",
			"age": "18",
			"maritalStatus": "unmarried",
			"ageAtMarriage": "",
			"religion": "christian",
			"caste":"",
			"disability": "sight",
			"motherTongue": "telugu",
			"literacyStatus": "",
			"educaltionLevel": "college",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": "1",
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "male",
			"dob": "",
			"age": "35",
			"maritalStatus": "married",
			"ageAtMarriage": "",
			"religion": "christian",
			"caste":"",
			"disability": "none",
			"motherTongue": "tamil",
			"literacyStatus": "",
			"educaltionLevel": "college",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": "2",
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "female",
			"dob": "",
			"age": "98",
			"maritalStatus": "divorced",
			"ageAtMarriage": "",
			"religion": "hindu",
			"caste":"",
			"disability": "sight",
			"motherTongue": "tamil",
			"literacyStatus": "",
			"educaltionLevel": "doctorate",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 2,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "male",
			"dob": "",
			"age": "18",
			"maritalStatus": "unmarried",
			"ageAtMarriage": "",
			"religion": "hindu",
			"caste":"",
			"disability": "hear",
			"motherTongue": "tamil",
			"literacyStatus": "",
			"educaltionLevel": "school",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 2,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "female",
			"dob": "",
			"age": "25",
			"maritalStatus": "widowed",
			"ageAtMarriage": "",
			"religion": "hindu",
			"caste":"",
			"disability": "mental",
			"motherTongue": "tamil",
			"literacyStatus": "",
			"educaltionLevel": "degree",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 3,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "female",
			"dob": "",
			"age": "5",
			"maritalStatus": "divorced",
			"ageAtMarriage": "",
			"religion": "muslim",
			"caste":"",
			"disability": "none",
			"motherTongue": "other",
			"literacyStatus": "",
			"educaltionLevel": "school",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 3,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "female",
			"dob": "",
			"age": "32",
			"maritalStatus": "unmarried",
			"ageAtMarriage": "",
			"religion": "muslim",
			"caste":"",
			"disability": "speech",
			"motherTongue": "other",
			"literacyStatus": "",
			"educaltionLevel": "degree",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 3,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "male",
			"dob": "",
			"age": "68",
			"maritalStatus": "unmarried",
			"ageAtMarriage": "",
			"religion": "muslim",
			"caste":"",
			"disability": "none",
			"motherTongue": "hindi",
			"literacyStatus": "",
			"educaltionLevel": "doctorate",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 4,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "other",
			"dob": "",
			"age": "25",
			"maritalStatus": "unmarried",
			"ageAtMarriage": "",
			"religion": "sikh",
			"caste":"",
			"disability": "none",
			"motherTongue": "kannada",
			"literacyStatus": "",
			"educaltionLevel": "college",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		},

		{
			"familyId": 4,
			"name": "Ani",
			"relationshipToHead": "",
			"sex": "female",
			"dob": "",
			"age": "17",
			"maritalStatus": "widowed",
			"ageAtMarriage": "",
			"religion": "sikh",
			"caste":"",
			"disability": "mental",
			"motherTongue": "other",
			"literacyStatus": "",
			"educaltionLevel": "college",
			"occupation": "",
			"nonEconomicActivity": "",
			"modeOfTravel": "",
			"birthPlace": "",
			"noOfChildren": ""
		}





		


		];
	
    

};

// console.log($scope.content);

// var chart = AmCharts.make("chartdiv",$scope.content);
