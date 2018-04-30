var params = localStorage.getItem("OID_ORG");
angular.module('Ventes', ['angularCharts']);

function MainController($scope,$http) {

$http.get('http://132.148.133.254:8888/WebServiceCommercial/rest/services/getLivrVentesMoisInJSON' + '/' + params)					
			
		.success(function(response){
			$scope.empData=response;
			$scope.reverse=true;
			
		$scope.data = {
		series: ['Livraisons'],
		data : [{
			x : $scope.empData[0].Commercial.mois,
			y: [$scope.empData[0].Commercial.valeur]	
		},
		{
			x : $scope.empData[1].Commercial.mois,
			y: [$scope.empData[1].Commercial.valeur]	
		},
		{
			x : $scope.empData[2].Commercial.mois,
			y: [$scope.empData[2].Commercial.valeur]
		},
		{
			x : $scope.empData[3].Commercial.mois,
			y: [$scope.empData[3].Commercial.valeur]
		},
		{
			x : $scope.empData[4].Commercial.mois,
			y: [$scope.empData[4].Commercial.valeur]
		},
		{
			x : $scope.empData[5].Commercial.mois,
			y: [$scope.empData[5].Commercial.valeur]
		},
		{
			x : $scope.empData[6].Commercial.mois,
			y: [$scope.empData[6].Commercial.valeur]
			
			
		},
		{
			x : $scope.empData[7].Commercial.mois,
			y: [$scope.empData[7].Commercial.valeur],
			
		},
		{
			x : $scope.empData[8].Commercial.mois,
			y: [$scope.empData[8].Commercial.valeur]
		},
		{
			x : $scope.empData[9].Commercial.mois,
			y: [$scope.empData[9].Commercial.valeur]
		},
		{
			x : $scope.empData[10].Commercial.mois,
			y: [$scope.empData[10].Commercial.valeur]
		},
		{
			x : $scope.empData[11].Commercial.mois,
			y: [$scope.empData[11].Commercial.valeur]
		},
	]     
	}

			})
		.error(function(){
		alert("Vérifier votre connexion internet ! ");
		});
	
	$scope.chartType = 'bar';

	
	$scope.messages = [];

	$scope.syntaxHighlight = function(json) {
		if (typeof json != 'string') {
			json = JSON.stringify(json, undefined, 2);
		}
		json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
			var cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			}
			return '<span class="' + cls + '">' + match + '</span>';
		});
	}

	$scope.config = {
		labels: false,
		tooltips: true,
		title : "Livraisons",
		colors:["#FF00FF"],
		legend : {
			display: false,
			position:'left'
		},
		innerRadius: 0,
		lineLegend: 'traditional',
	}
}

