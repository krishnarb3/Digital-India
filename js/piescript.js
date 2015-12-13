function pieAgeLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var achart = AmCharts.makeChart("agechartdiv", scope.age);
});

}

function pieDisLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var dchart = AmCharts.makeChart("dischartdiv", scope.disability);
});

}

function pieEduLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var echart = AmCharts.makeChart("educhartdiv", scope.education);
});

}

function pieRelLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var rchart = AmCharts.makeChart("relchartdiv", scope.religion);
});

}

function pieMarLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var mchart = AmCharts.makeChart("marchartdiv", scope.marital);
});

}

function pieMotLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var mochart = AmCharts.makeChart("motchartdiv", scope.mother);
});

}

function pieSexLoad(){

var scope = angular.element(document.querySelector("#maincontainer")).scope();

scope.$apply(function(){
var schart = AmCharts.makeChart("sexchartdiv", scope.sex);
});

}


// var chart = AmCharts.makeChart( "chartdiv", {
//   "type": "pie",
//   "theme": "light",
//   "dataProvider": [ {
//     "country": "Lithuania",
//     "value": 260
//   }, {
//     "country": "Ireland",
//     "value": 201
//   }, {
//     "country": "Germany",
//     "value": 65
//   }, {
//     "country": "Australia",
//     "value": 39
//   }, {
//     "country": "UK",
//     "value": 19
//   }, {
//     "country": "Latvia",
//     "value": 10
//   } ],
//   "valueField": "value",
//   "titleField": "country",
//   "outlineAlpha": 0.4,
//   "depth3D": 15,
//   "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
//   "angle": 30,
//   "export": {
//     "enabled": true
//   }
// } );


//var chart = AmCharts.makeChart("chartdiv", controllerScope.content);