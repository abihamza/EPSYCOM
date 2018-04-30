var params = localStorage.getItem("OID_ORG");
var components = angular.module( 'components', [] );
components.directive( 'gauge', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			label: "@",
			min: "=",
			max: "=",
			value: "="
		},
		link: function (scope, element, attrs, ngModelCtrl, http) {
		if (document.documentElement.clientWidth <= 414){
			var config = {
				size: 220,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltMois"),
				minorTicks: 4
			};
			}
		if (document.documentElement.clientWidth <= 736 && document.documentElement.clientWidth > 414){
			var config = {
				size: 220,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltMois"),
				minorTicks: 4
			};
			}
			if (document.documentElement.clientWidth <= 600 && document.documentElement.clientHeight >= 960){
			var config = {
				size: 400,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltMois"),
				minorTicks: 4
			};
			}
			if (document.documentElement.clientWidth > 700 && document.documentElement.clientHeight >= 600 ){
			var config = {
				size: 400,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltMois"),
				minorTicks: 4
			};
			}

			var range = config.max - config.min;
			config.redZones = [ { from: localStorage.getItem("ngStorage-greenFctCltMoisColor"), to: config.max } ];
			config.yellowZones = [ { from: localStorage.getItem("ngStorage-orangeFctCltMoisColor"), to: localStorage.getItem("ngStorage-greenFctCltMoisColor")} ];
			config.greenZones = [ { from: config.min + range*0, to: localStorage.getItem("ngStorage-orangeFctCltMoisColor")} ];

			scope.gauge = new Gauge( element[0], config );
			scope.gauge.render();
			scope.gauge.redraw( scope.value );
			scope.$watch( 'value', function() {
				if ( scope.gauge )
					scope.gauge.redraw( scope.value );
			} );
		}
	}
});

components.directive( 'gauge1', function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			label: "@",
			min: "=",
			max: "=",
			value: "="
		},
		link: function (scope, element, attrs, ngModelCtrl) {
				if (document.documentElement.clientWidth <= 414){
			var config = {
				size: 220,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltAnnee"),
				minorTicks: 4
			};
			}
		if (document.documentElement.clientWidth <= 736 && document.documentElement.clientWidth > 414){
			var config = {
				size: 220,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltAnnee"),
				minorTicks: 4
			};
			}
			if (document.documentElement.clientWidth <= 600 && document.documentElement.clientHeight >= 960){
			var config = {
				size: 400,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltAnnee"),
				minorTicks: 4
			};
			}
			if (document.documentElement.clientWidth > 700 && document.documentElement.clientHeight >= 600 ){
			var config = {
				size: 400,
				label: attrs.label,
				min: undefined != scope.min ? scope.min : 0,
				max: undefined != scope.max ? scope.max : localStorage.getItem("ngStorage-maxFctCltAnnee"),
				minorTicks: 4
			};
			}
			var range = config.max - config.min;
			config.redZones = [ { from: localStorage.getItem("ngStorage-greenFctCltAnneeColor"), to: config.max } ];
			config.yellowZones = [ { from: localStorage.getItem("ngStorage-orangeFctCltAnneeColor"), to: localStorage.getItem("ngStorage-greenFctCltAnneeColor")} ];
			config.greenZones = [ { from: config.min + range*0, to: localStorage.getItem("ngStorage-orangeFctCltAnneeColor")} ];

			scope.gauge = new Gauge( element[0], config );
			scope.gauge.render();
			scope.gauge.redraw( scope.value );
			scope.$watch( 'value', function() {
				if ( scope.gauge )
					scope.gauge.redraw( scope.value );
			} );
		}
	}
});

function MyController($scope,$http){
	
	$http.get('http://132.148.133.254:8888/WebServiceCommercial/rest/services/getFctCltJaugeInJSON' + '/' + params)			
	.success(function(response){
			$scope.empData=response;
			var x = $scope.empData[0].Commercial.valeur;
			var y =	$scope.empData[1].Commercial.valeur;
			$scope.values = { p: x, o: y};			
			
	})
		.error(function(){
		 alert("Vérifier votre connexion internet !");
		});	
}

