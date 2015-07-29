define(['app'],function(app){

// Controller
app.register.controller('listController',['$scope','$location','$routeParams',function($scope, $location, $routeParams){
    $scope.ctrl.page = $routeParams.type;
    $scope.title = $location.path();
    console.log($location);
    console.log($routeParams);
    $scope.list = [{no:1},{no:2},{no:3},{no:4},{no:5},{no:6},{no:7},{no:8},{no:9},{no:10}];
}]);

});

