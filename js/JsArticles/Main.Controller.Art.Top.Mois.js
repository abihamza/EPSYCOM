var oidOrg = localStorage.getItem("OID_ORG");

(function (angular) {
  'use strict';
  angular
    .module('myApp', [ 'ngAnimate', 'vAccordion' ])
    .config(function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
    })

    .controller('MainController', function ($scope, $http) {
	$http.get('http://132.148.133.254:8888/WebServiceCommercial/rest/services/getTopMoisArtInJSON/' + oidOrg )	
	.success(function(response){
	
			$scope.empData=response;
			$scope.reverse=true;
			
			}).error(function(){alert("Vérifier votre connexion internet ! ");});

    });
})(angular);