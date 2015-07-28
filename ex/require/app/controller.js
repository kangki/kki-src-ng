define(['app'],function(app){

// Controller
app.controller('viewController',['$scope','$location',function($scope, $location){
    $scope.ctrl.page = $location.path();
    $scope.title = $location.path();
    $scope.list = [{no:1},{no:2},{no:3},{no:4},{no:5},{no:6},{no:7},{no:8},{no:9},{no:10}];
}]);

});

