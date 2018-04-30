var OidOrg = localStorage.getItem("OID_ORG");
angular.module('Stock', ['angularCharts']);

function MainController($scope,$http) {

$http.get('http://132.148.133.254:8888/WebServiceCommercial/rest/services/getStkFamilleInJSON' + '/' + OidOrg)					
			
		.success(function(response){
			$scope.empData=response;
			$scope.reverse=true;
		$scope.data = {
        series: ['Facturations'],
        data : []};
		for(var i=0;i<$scope.empData.length;i++)
			{
					$scope.data.data.push(
				   {x: $scope.empData[i].Commercial.descFamPrd, 
				   y: [$scope.empData[i].Commercial.qte]});
			}
	
	

 

			})
		.error(function(){
		alert("Vérifier votre connexion internet ! ");
		});
	
	$scope.chartType = 'pie';

	
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
		title : "Stock par famille marbre",
		colors:["#e67e22","#27ae60","#DC143C","#0000FF","#800000","#800080"],
		legend : {
			display: true,
			position:"right"
		},
		innerRadius: 0,
		lineLegend: '',
	}
}

