app.service("update",["$http",function($http){
var obj ={};
obj.getFunction = function(id)
{
return $http({
                    method: 'GET',
                    url: 'http://localhost:8080/friends/'+id
                });
               
}
obj.updateFunction = function(id,inputdata)
 {
 	// console.log(id+","+inputdata);
return $http({
                    method: 'PUT',
                    url: 'http://localhost:8080/friends/'+id,
                    data: inputdata
                });
}
return obj;
}]);