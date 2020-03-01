var app1 = 
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
        $http.get("https://localhost:44356/weatherforecast")
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
    //https://jsonplaceholder.typicode.com/posts
    app1.controller('namesCtrl', function($scope) {
        $scope.names = [
            'Jani',
            'Carl',
            'Margareth',
            'Hege',
            'Joe',
            'Gustav',
            'Birgit',
            'Mary',
            'Kai'
        ];
    }); 
    app1.controller("AppCtrl", function($scope, $http){
        $http.get("https://api.github.com/users/Marcelo510/repos")
        .success(function(data){
            $scope.repos = data;
        })
        .error(function(err){
            console.log(err);
        })
    });

    