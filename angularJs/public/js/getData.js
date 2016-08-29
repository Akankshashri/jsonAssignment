var strtpoint = 0;

var app = angular   
    .module("getData", [])
    .controller("viewAll",function($scope, $http, $log,update,addData) {
        $scope.inputdata={};
        $scope.t=false;
        $scope.load = function() {
            // console.log("load");
            $http({
                    method: 'GET',
                    url: 'http://localhost:8080/friends?_start=' + strtpoint + '&_limit=12'
                })
                .then(function(response) {
                    $scope.friends = response.data;
                    $log.info(response);
                }, function(reason) {
                    $scope.error = reason;
                });
        };

        $scope.search = function(searchText) {
            $http({
                    method: 'GET',
                    url: 'http://localhost:8080/friends?q='+searchText +'&_limit=12'
                })
                .then(function(response) {
                    $scope.friends=response.data;
                    $log.info(response);
                }, function(reason) {
                    $scope.error = reason;
                });
        };
        $scope.edit= function(id){
            $scope.t=true;
            update.getFunction(id).success(function(response)
            {
                $scope.inputdata=response;
                 $log.info($scope.inputdata);
            });
        }
         $scope.updatesrevise= function(){
            $scope.t=false;
            update.updateFunction($scope.inputdata.id,$scope.inputdata).success(function(response)
            {
                $scope.friends=[response];
            });
        }
        $scope.sortColumn = "name";
        $scope.reverseSort = false;
        $scope.refersh=function()
        {
            $scope.t=false;
             $scope.inputdata={};
        }
        $scope.delete = function(id) {
         var   uid=$scope.friends[id].id;
            $http.delete("http://localhost:8080/friends/" + uid)
                .success(function(result) {
                    console.log(result);
                    $scope.friends.splice(id, 1);
                }).error(function() {
                    console.log("error");
                });
        };
        $scope.addFriends = function() {
           addData.AddFunction( $scope.inputdata)
                .then(function(response) {
                        // success
                      $scope.friends = [response.data];
                    $log.info(response);
                    },
                    function(response) { // optional
                        // failed
                        alert(response);
                    });
        };
    });
