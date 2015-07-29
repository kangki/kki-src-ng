define(['angular'],function(angular){

// 모듈 선언
var app = angular.module('app',['ngRoute']);

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
    $routeProvider.when('/:type/list', routeResolverProvider.resolve({
        path:'/biz/board', name:'list', as:'vm'
    }));

    $routeProvider.when('/:type/view/:no', routeResolverProvider.resolve({
        path:'/biz/board', name:'view', as:'vm'
    }));

    $routeProvider.otherwise({redirectTo:'/notice/list'});
}]);

return app;

});