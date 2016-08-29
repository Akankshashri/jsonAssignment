var app1 = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
    	var employees=[
    	{name:"Ben",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:59480},
    	{name:"Sara",dateOfBirth:new Date("May 03,1970"),gender:"Female",salary:50480},
    	{name:"Mark",dateOfBirth:new Date("August 13,1975"),gender:"Male",salary:69480},
        {name:"Pam",dateOfBirth:new Date("Decembr 20,1989"),gender:"Female",salary:49480},
          {name:"Todd",dateOfBirth:new Date("Decembr 20,1989"),gender:"Male",salary:65480}
    	];
    	$scope.employees=employees;
    	$scope.sortColumn="name";
        $scope.reverseSort=false;
        $scope.sortData=function(column){
             $scope.reverseSort=($scope.sortColumn==column)?!$scope.reverseSort:false;
             $scope.sortColumn=column;
        }
        $scope.getSortClass=function(column){
            if($scope.sortColumn==column){
                return $scope.reverseSort ? 'arrow-up':'arrow-down'
            }
            return '';
        }
        });