var app1 = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
    	var technologies=[
    	{name:"C#",likes:0,Dislikes:0},
    	{name:"Asp.Net",likes:0,Dislikes:0},
    	{name:"Angular Js",likes:0,Dislikes:0},
    	{name:"Java Script",likes:0,Dislikes:0},
    	];
    	$scope.technologies=technologies;
    	$scope.incrementLikes=function(technology)
    	{
    		technology.likes++;
    	}
    	$scope.incrementDislikes=function(technology)
    	{
    		technology.Dislikes++;
    	}
        });