var app1 = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        var countries = [
        		{
                name: "india",
                cities: [
                	{ name: "delhi" },
                    { name: "mumbai" },
                    { name: "jabalpur" }
                ]
            },
            {
                name: "UK",
                cities: [{ name: "London" },
                    { name: "Manchistar" },
                    { name: "Birmingham" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            } ];
        $scope.countries=countries;
    });
