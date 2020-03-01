angular.module("ToDoList", ["LocalStoregeModule"])
.factory('ToDoService', function(LocalStoregeModule){
    var ToDoService = {};
    ToDoService.key = "angular-listaMarcelolar";
    if(localStorageService.get(ToDoService.key)){
        ToDoService.activities = localStorageService.get(ToDoService.key);
    }
    else{
        ToDoService.activities = [];
    };

    ToDoService.getAll = function(){
        return ToDoService.activities;
    }
    return ToDoService();
})
.controller("ToDoController", function($scope, ToDoService){
    $scope.todo = ToDoService.getAll()
    $scope.addActiv = function(){
        $scope.todo.push($scope.newActiv);
        $scope.newActiv = {};
        localStorageService.set("angular-listaMarcelo",$scope.todo);
    };
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

})

