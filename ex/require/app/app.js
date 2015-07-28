define(['angular'],function(angular){
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

return app;

});