define(['angular'],function(angular){
// 모듈 선언
var app = angular.module('app',['ngRoute']);

// 앵귤러 실행
angular.element(document).ready(function(){ 
    angular.bootstrap(document, ['app']); 
});

// Register
app.config(['$controllerProvider','$compileProvider','$filterProvider','$provide',
    function ($controllerProvider,$compileProvider,$filterProvider,$provide){
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };
    }
]);

// Route 설정
app.config(['$routeProvider','routeResolverProvider',function($routeProvider,routeResolverProvider){
    $routeProvider.when('/book', routeResolverProvider.resolve({
        path:'/biz', name:'book', as:'vm'
    }));

    $routeProvider.when('/movie', routeResolverProvider.resolve({
        path:'/biz', name:'movie', as:'vm'
    }));

    $routeProvider.when('/music', routeResolverProvider.resolve({
        path:'/biz', name:'music', as:'vm'
    }));

    $routeProvider.otherwise({redirectTo:'/book'});
}]);

return app;

});