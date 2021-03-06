require.config({
    urlArgs:'v='+(new Date()).getTime(),
    paths:{
        jquery : '../../../lib/jquery/jquery.min',
        bootstrap : '../../../lib/bootstrap/js/bootstrap.min',
        angular : '../../../lib/angular/angular',
        ngRoute : '../../../lib/angular/angular-route',
        app : './app',
        controller : './common/controller',
        routeResolverProvider : './common/routeResolverProvider'
    },
    shim:{
        bootstrap : {
            deps:['jquery']
        },
        angular : {
            deps:['bootstrap'],exports:'angular'
        },
        ngRoute : {
            deps:['angular']
        },
        app : {
            deps:['angular','ngRoute']
        },
        controller:{
            deps:['app']
        },
        routeResolverProvider:{
            deps:['app']
        }
    }
});

define(['jquery', 'bootstrap', 'angular', 'app', 'controller', 'routeResolverProvider'],function(){

});