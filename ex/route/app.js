// 모듈 선언
var app = angular.module('app',['ngRoute']);

// 앵귤러 실행
angular.element(document).ready(function(){ 
    angular.bootstrap(document, ['app']); 
});

// Route 설정
angular.module('app')
.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/book',{
        controller:'viewController',
        templateUrl:'./book.html'
    });

    $routeProvider.when('/movie',{
        controller:'viewController',
        templateUrl:'./movie.html'
    });

    $routeProvider.when('/music',{
        controller:'viewController',
        templateUrl:'./music.html'
    });

    $routeProvider.otherwise({redirectTo:'/book'});
}]);

// Controller
angular.module('app')
.controller('controller',['$scope',function($scope){
    $scope.title = 'ngRoute';
    this.page = 'list';
}]);
