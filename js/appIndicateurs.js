var params = localStorage.getItem("OID_ORG");
var app = angular.module('app', ["ngStorage"]);
function MyCtrlCmdFrs($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getCmdFrsJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeCmdFrsMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenCmdFrsMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxCmdFrsMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeCmdFrsAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenCmdFrsAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxCmdFrsAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							alert("Vérifier votre connexion internet !");
							});
						}
function MyCtrlCmdClt($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getCmdCltJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeCmdCltMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenCmdCltMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxCmdCltMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeCmdCltAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenCmdCltAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxCmdCltAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}
function MyCtrlFctClt($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getFctCltJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeFctCltMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenFctCltMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxFctCltMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeFctCltAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenFctCltAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxFctCltAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}
function MyCtrlEncClt($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getEncCltJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeEncCltMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenEncCltMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxEncCltMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeEncCltAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenEncCltAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxEncCltAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}
function MyCtrlRegFrs($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getRegFrsJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeRegFrsMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenRegFrsMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxRegFrsMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeRegFrsAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenRegFrsAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxRegFrsAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}
function MyCtrlFctFrs($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getFctFrsJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeFctFrsMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenFctFrsMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxFctFrsMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeFctFrsAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenFctFrsAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxFctFrsAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}						
function MyCtrlStock($scope, $http, $localStorage) {
						$http.get('http://151.80.56.163:8888/WebServiceCommercial/rest/services/getSockJaugeInJSON'+'/'+ params)
						.success(function(response){
						$scope.empData=response;
						$scope.reverse=true;
						$localStorage.orangeStkMoisColor = $scope.empData[0].Commercial.no;
						$localStorage.greenStkMoisColor = $scope.empData[0].Commercial.nv;
						$localStorage.maxStkMois = $scope.empData[0].Commercial.max; 
						$localStorage.orangeStkAnneeColor = $scope.empData[1].Commercial.no;
						$localStorage.greenStkAnneeColor = $scope.empData[1].Commercial.nv;
						$localStorage.maxStkAnnee = $scope.empData[1].Commercial.max;
						
						}).error(function(){
							
							});
						}						



