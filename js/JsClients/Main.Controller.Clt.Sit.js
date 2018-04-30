var oidOrg = localStorage.getItem("OID_ORG");
if (typeof localStorage["ngStorage-OID_CLT"] == 'undefined'){
alert("Veuillez choisir un client dans l'onglet Clients ! ");
window.location.href = "../EspaceClients/Espace.Clients.html"
}
var oidClt = localStorage.getItem("ngStorage-OID_CLT");

(function (angular) {
  'use strict';
  angular
    .module('myApp', [ 'ngAnimate', 'vAccordion' ])
    .config(function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
    })

    .controller('MainController', function ($scope, $http) {
	$http.get('http://132.148.133.254:8888/WebServiceCommercial/rest/services/getSituationCltInJson/' + oidClt + '/' + oidOrg)	
	.success(function(response){
	
			$scope.empData=response;
			$scope.reverse=true;
			
			}).error(function(){alert("Vérifier votre connexion internet ! ");});

    });
})(angular);