app.factory('loadAll',function(){
	return{
		load:function()
		{
			$http({
                method:'GET',
                url:'http://localhost:8080/friends?q='+strtpoint+'&_start=0&_limit=12'
            })
            .then(function(response){
                friends=response.data;
                //$log.info(response);
                return friends
            },function(reason){
                error=reason
                return error
            });
		}
	};
});