angular.module("MiFirstApp", [])
    .controller("FirstController", function($scope, $http){
        $scope.nombre = "Alonso";
        $scope.comentarios = [
            {
                Comentario : "Esta bueno",
                Usuario : "Marcelo"
            },
            {
                Comentario : "Otro comenta",
                Usuario : "Rodrigo"
            }
        ]
        
        
        
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
