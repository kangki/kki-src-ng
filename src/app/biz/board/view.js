define(['app'],function(app){

// Controller
app.register.controller('viewController',['$scope','$location','$routeParams',function($scope, $location, $routeParams){
    $scope.ctrl.page = $routeParams.type;
    $scope.title = $location.path();
    $scope.view = {
    	no:$routeParams.no,
    	title:'가나다라' + $routeParams.no
    };
}]);

});

