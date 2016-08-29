app.service("addData",["$http",function($http){
var obj ={};
obj.AddFunction = function(inputdata)
{
	return $http({
                    url: "http://localhost:8080/friends/",
                    method: "POST",
                    data: inputdata
                })
	}
return obj;
}]);