var myList = angular.module("myList",["xeditable"]);
myList.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
myList.controller("listController", function($scope){
	$scope.data = [
		{
			"name": "Tushar Mehrotra",
			"gender": "Male",
			"age": 24
		},
		{
			"name": "Harshith K",
			"gender": "Male",
			"age": 23
		},
		{
			"name": "Pramod Hegde",
			"gender": "Male",
			"age": 24
		},
		{
			"name": "Ganeshan Kondawar",
			"gender": "Male",
			"age": 24
		},
		{
			"name": "Purva Jain",
			"gender": "Female",
			"age": 23
		},
		{
			"name": "Vishal Agarwal",
			"gender": "Male",
			"age": 24
		},
	];
	$scope.add = function(){
		$scope.data.push({'name': $scope.name,'gender': $scope.gender,'age':$scope.age});
		$scope.name ="";
		$scope.gender = "";
		$scope.age = "";
	}
	$scope.removeUser = function(index){
		/*var index = $scope.data.indexOf(index);*/
  		$scope.data.splice(index, 1); 
	}
	
	
});