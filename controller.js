var app =
angular.module("MiFirstApp", ["LocalStorageModule"])
    .controller("FirstController", function($scope, $http, localStorageService){
        $scope.nombre = "Alonso";
        $scope.comentarios = [
            {
                comentario: "Esta bueno",
                usuario: "uno"
            },
            {
                comentario: "Otro comenta",
                usuario: "Otro"
            }
        ];
        $scope.agregaComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        };
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .success(function(data){
                console.log(data);
            })
            .error(function(err){
                console.log(err);
        });
        if(localStorageService.get("angular-listaMarcelo")){
            $scope.todo = localStorageService.get("angular-listaMarcelo");
        }
        else{
            $scope.todo = [];
        };
        $scope.addActiv = function(){
            $scope.todo.push($scope.newActiv);
            $scope.newActiv = {};
            localStorageService.set("angular-listaMarcelo",$scope.todo);
        };
    });
    app.filter("removeHtml", function(){
        return function(texto){
            return String(texto).replace(/<[^>]+>/gm, '');
        }
    })
    app.controller("FilterController", function($scope){
        $scope.mi_html = "<p>Quitar etiquetas</p>"
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
