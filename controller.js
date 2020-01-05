angular.module("MiFirstApp", [])
    .controller("FirstController", function($scope, $http){
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .success(function(data){
                console.log(data);
            })
            .error(function(err){
                           
            });
    });




// var app = angular.module("MiFirstApp", []);
// app.controller("FirstController", ["$scope", "$http", function($scope, $http){
//     $scope.nombre = "Marcelo";
//     $http.get("http://jsonplaceholder.typicode.com/posts")
//         .success(function(data){
//             console.log(data);
//         })
//         .error(function(err){
//             console.log(err);            
//         });
// }]);
