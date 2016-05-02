MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    }
});
MathJax.Hub.Configured();


var app = angular.module('methaneEnergy', ['ngAnimate']);

var Canadacountryis = "Canada";
var Canadacowsonfarm = 1000;
var Canadacostofdigester = 500000;
var Canadakwhelectricityperyear = 1250000;
var Canadacostperkwh = .05;
var Canadaanswertoproblem1 = (3*Canadacowsonfarm*365);
var Canadaanswertoproblem2 = (Canadaanswertoproblem1*Canadacostperkwh);
var Canadaanswertoproblem3 = Math.round(Canadacostofdigester/Canadaanswertoproblem2);
var Canadaanswertoproblem4 = Math.round(Canadakwhelectricityperyear/365/3);
       
var Francecountryis = "France";
var Francecowsonfarm = 300;
var Francecostofdigester = 300000;
var Francekwhelectricityperyear = 600000;
var Francecostperkwh = .20;
var Franceanswertoproblem1 = (3*Francecowsonfarm*365);
var Franceanswertoproblem2 = (Franceanswertoproblem1*Francecostperkwh);
var Franceanswertoproblem3 = Math.round(Francecostofdigester/Franceanswertoproblem2);
var Franceanswertoproblem4 = Math.round(Francekwhelectricityperyear/365/3);
       
var Greececountryis = "Greece";
var Greececowsonfarm = 100;
var Greececostofdigester = 250000;
var Greecekwhelectricityperyear = 700000;
var Greececostperkwh = .30;
var Greeceanswertoproblem1 = (3*Greececowsonfarm*365);
var Greeceanswertoproblem2 = (Greeceanswertoproblem1*Greececostperkwh);
var Greeceanswertoproblem3 = Math.round(Greececostofdigester/Greeceanswertoproblem2);
var Greeceanswertoproblem4 = Math.round(Greecekwhelectricityperyear/365/3);
       
var Spaincountryis = "the US";
var Spaincowsonfarm = 500;
var Spaincostofdigester = 400000;
var Spainkwhelectricityperyear = 800000;
var Spaincostperkwh = .10;
var Spainanswertoproblem1 = (3*Spaincowsonfarm*365);
var Spainanswertoproblem2 = (Spainanswertoproblem1*Spaincostperkwh);
var Spainanswertoproblem3 = Math.round(Spaincostofdigester/Spainanswertoproblem2);
var Spainanswertoproblem4 = Math.round(Spainkwhelectricityperyear/365/3);
       
var USAcountryis = "Spain";
var USAcowsonfarm = 250;
var USAcostofdigester = 500000;
var USAkwhelectricityperyear = 600000;
var USAcostperkwh = .25;
var USAanswertoproblem1 = (3*USAcowsonfarm*365);
var USAanswertoproblem2 = (USAanswertoproblem1*USAcostperkwh);
var USAanswertoproblem3 = Math.round(USAcostofdigester/USAanswertoproblem2);
var USAanswertoproblem4 = Math.round(USAkwhelectricityperyear/365/3);

    
app.directive("mathjaxBind", function() { //<!--http://jsfiddle.net/spicyj/ypqvp/
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs, InformationService) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});


app.controller('MyCtrl', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression1 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe = false;
	
	$scope.myFunc = function() {
		$scope.showMe = !$scope.showMe;
	};
	
    
});

/*app.controller('MyCtrl2', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression2 = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe2 = false;
	
	$scope.myFunc = function() {
		$scope.showMe2 = !$scope.showMe2;
	};
	
    
});*/

/*app.controller('MyCtrl3', function ($scope, $element, InformationService) {
	$scope.info = InformationService;
    $scope.expression = $scope.info;//this was THE all important addition!!!!
    
    $scope.showMe3 = false;
	
	$scope.myFunc = function() {
		$scope.showMe3 = !$scope.showMe3;
	};
	
    
});*/
 
       
app.controller('LocationListController', function ($scope, InformationService) {
	$scope.order = "place";
	$scope.info = InformationService;

});


app.controller('LocationDetailController', function ($scope, InformationService) {
	$scope.info = InformationService;

});


app.service('InformationService', function () {

	return {
		
		'addLocation': function (location) {
			this.locations.push(location);
		},
	
		'selectedLocation': null,
		'locations': [
			{
				"place": "Canada",
				"cowsonfarm": 1000,
				"costofdigester": 500000,
				"kwhelectricityperyear": 1250000,
				"costperkwh": .05,
				"questionone": "\ \\left(3\\frac{\ kWh}{\ day/cow}\\right) \\times \\left("+Canadacowsonfarm+"\\ cows\\right)\\times \\left(365\\frac{\ days}{\ year}\\right) = "+Canadaanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Canadaanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right)\\times \\left("+Canadacostperkwh+"\\frac{\ dollars}{\ kWh}\\right) =\\ "+Canadaanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				"questionthree": "\ \\left("+Canadacostofdigester.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ digester}\\right) \\div \\left("+Canadaanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ yr}\\right) =\\ "+Canadaanswertoproblem3.toPrecision(2)+"\\ years",
				"questionfour": "\ \\left("+Canadakwhelectricityperyear.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\div \\left(365\\frac{\ days}{\ yr}\\right) \\div \\left(3\\frac{\ kWh/day}{\ cow}\\right) =\\ "+Canadaanswertoproblem4.toPrecision(3)+"\\ cows"
				  
			},
			{
				"place": "France",
				"cowsonfarm": 300,
				"costofdigester": 300000,
				"kwhelectricityperyear": 600000,
				"costperkwh": .20,
				"questionone": "\ \\left(3\\frac{\ kWh}{\ day/cow}\\right) \\times \\left("+Francecowsonfarm+"\\ cows\\right)\\times \\left(365\\frac{\ days}{\ year}\\right) = "+Franceanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Franceanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right)\\times \\left("+Francecostperkwh+"\\frac{\ dollars}{\ kWh}\\right) =\\ "+Franceanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				"questionthree": "\ \\left("+Francecostofdigester.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ digester}\\right) \\div \\left("+Franceanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ yr}\\right) =\\ "+Franceanswertoproblem3.toPrecision(2)+"\\ years",
				"questionfour": "\ \\left("+Francekwhelectricityperyear.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\div \\left(365\\frac{\ days}{\ yr}\\right) \\div \\left(3\\frac{\ kWh/day}{\ cow}\\right) =\\ "+Franceanswertoproblem4.toPrecision(3)+"\\ cows"  
			
				
			},
			{
				"place": "Greece",
				"cowsonfarm": 100,
				"costofdigester": 250000,
				"kwhelectricityperyear": 700000,
				"costperkwh": .30,
				"questionone": "\ \\left(3\\frac{\ kWh}{\ day/cow}\\right) \\times \\left("+Greececowsonfarm+"\\ cows\\right)\\times \\left(365\\frac{\ days}{\ year}\\right) = "+Greeceanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Greeceanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right)\\times \\left("+Greececostperkwh+"\\frac{\ dollars}{\ kWh}\\right) =\\ "+Greeceanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				"questionthree": "\ \\left("+Greececostofdigester.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ digester}\\right) \\div \\left("+Greeceanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ yr}\\right) =\\ "+Greeceanswertoproblem3.toPrecision(2)+"\\ years",
				"questionfour": "\ \\left("+Greecekwhelectricityperyear.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\div \\left(365\\frac{\ days}{\ yr}\\right) \\div \\left(3\\frac{\ kWh/day}{\ cow}\\right) =\\ "+Greeceanswertoproblem4.toPrecision(3)+"\\ cows" 
				
			},
			{
				"place": "Spain",
				"cowsonfarm": 250,
				"costofdigester": 500000,
				"kwhelectricityperyear": 600000,
				"costperkwh": .25,
				"questionone": "\ \\left(3\\frac{\ kWh}{\ day/cow}\\right) \\times \\left("+Spaincowsonfarm+"\\ cows\\right)\\times \\left(365\\frac{\ days}{\ year}\\right) = "+Spainanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+Spainanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right)\\times \\left("+Spaincostperkwh+"\\frac{\ dollars}{\ kWh}\\right) =\\ "+Spainanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				"questionthree": "\ \\left("+Spaincostofdigester.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ digester}\\right) \\div \\left("+Spainanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ yr}\\right) =\\ "+Spainanswertoproblem3.toPrecision(2)+"\\ years",
				"questionfour": "\ \\left("+Spainkwhelectricityperyear.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\div \\left(365\\frac{\ days}{\ yr}\\right) \\div \\left(3\\frac{\ kWh/day}{\ cow}\\right) =\\ "+Spainanswertoproblem4.toPrecision(3)+"\\ cows"  
				
			},
			{
				"place": "USA",
				"cowsonfarm": 500,
				"costofdigester": 400000,
				"kwhelectricityperyear": 800000,
				"costperkwh": .10,
				"questionone": "\ \\left(3\\frac{\ kWh}{\ day/cow}\\right) \\times \\left("+USAcowsonfarm+"\\ cows\\right)\\times \\left(365\\frac{\ days}{\ year}\\right) = "+USAanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ kWh",
				"questiontwo": "\ \\left("+USAanswertoproblem1.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right)\\times \\left("+USAcostperkwh+"\\frac{\ dollars}{\ kWh}\\right) =\\ "+USAanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\ dollars",
				"questionthree": "\ \\left("+USAcostofdigester.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ digester}\\right) \\div \\left("+USAanswertoproblem2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ dollars}{\ yr}\\right) =\\ "+USAanswertoproblem3.toPrecision(2)+"\\ years",
				"questionfour": "\ \\left("+USAkwhelectricityperyear.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+"\\frac{\ kWh}{\ yr}\\right) \\div \\left(365\\frac{\ days}{\ yr}\\right) \\div \\left(3\\frac{\ kWh/day}{\ cow}\\right) =\\ "+USAanswertoproblem4.toPrecision(3)+"\\ cows"  
				
			},
		]
		
	};
});