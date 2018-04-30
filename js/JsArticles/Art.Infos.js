var app = angular.module('app', ["ngStorage"]);
						function MyCtrl($scope, $http, $localStorage) {
						$http.get("http://132.148.133.254:8888/WebServiceCommercial/rest/services/getProduitsInJSON")
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
							$scope.checkedItems = function() { // function to get value of oid by checkbox
							var checkedItems = 0;
							angular.forEach($scope.empData, function(val){
								angular.forEach(val, function(cb, key) {
									if(key.substring(0, 2) == "cb" && cb ) {
										checkedItems = val.Commercial.oid;
										$localStorage.OID_PRD = val.Commercial.oid; // sauvegarder la valeur du OID dans la memoire
										$localStorage.DESC_PRD =  val.Commercial.descProduit;
											
									}
								})
							})
							return checkedItems
						}
						  
									$scope.selected = function() { // function to disable checkbox when one is true
										var i, selectedCount = 0;
										for (i = 0; i < $scope.empData.length; i++) {
										  if ($scope.empData[i].cb) {
											selectedCount += 1;
										  }
										}
										return selectedCount;
									  };
				
											
												

						}).error(function(){
							alert("Vérifier votre connexion internet !");
							});
						}

