// 모듈 선언
var app = angular.module('app',['ngRoute']);

// 앵귤러 실행
angular.element(document).ready(function(){ 
    angular.bootstrap(document, ['app']); 
});

// Route 설정
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/book',{
        controller:'viewController',
        templateUrl:'./view/book.tpl'
    });

    $routeProvider.when('/movie',{
        controller:'viewController',
        templateUrl:'./view/movie.tpl'
    });

    $routeProvider.when('/music',{
        controller:'viewController',
        templateUrl:'./view/music.tpl'
    });

    $routeProvider.otherwise({redirectTo:'/book'});
}]);

// Controller
app.controller('controller',['$scope',function($scope){
    $scope.title = 'ngRoute';
    this.page = 'list';
}]);

app.controller('viewController',['$scope','$location',function($scope, $location){
    $scope.ctrl.page = $location.path();
    $scope.title = $location.path();
    $scope.list = [{no:1},{no:2},{no:3},{no:4},{no:5},{no:6},{no:7},{no:8},{no:9},{no:10}];
}]);
