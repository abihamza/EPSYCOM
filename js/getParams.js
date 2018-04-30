var app=angular.module("app",[]);
			app.controller("MainCtrl",function($scope,$http) {
			$scope.checkLogin = function(result) {
				var params = 4
				document.write(params);
				$http.get('http://localhost:7979/WebServiceTransit/rest/services/getUserByIdJSON' + '/' + params)
							.success(function(response) {
					
							$scope.myData = response;
							
							var x = 1;
							
										if($scope.myData.Transit.loginUser == $scope.user_name  && $scope.myData.Transit.pwdUser == $scope.password)
										{
										window.location.href = 'home-page.html';
										x = 0;
										}
					
										if (x == 1){
										$scope.erreurLog = 'Utilisateur ou mot de passe incorrect ! ';
										}
					
				})
				.error(function(){
					$scope.erreurRscr = 'Vérifier votre connexion internet ! '					
				});
				};
			});

