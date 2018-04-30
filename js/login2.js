function myCtrl($scope, $http, $localStorage) {
						$http.get("http://localhost:8080/WebServiceCommercial/rest/services/getStructuresInJSON")
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.OID_ORG = $scope.Struct;
						
						}).error(function(){
							alert("Vérifier votre connexion internet !");		
							});
						}

