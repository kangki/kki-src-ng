require.config({
    urlArgs:'v='+(new Date()).getTime(),
    paths:{
        jquery : '../lib/jquery/jquery.min',
        bootstrap : '../lib/bootstrap/js/bootstrap.min',
        angular : '../lib/angular/angular',
        ngRoute : '../lib/angular/angular-route',
        app : './app',
        controller : './common/controller',
        directive : './common/directive',
        provider : './common/provider'
    },
    shim:{
        bootstrap : { deps:['jquery'] },
        angular : { deps:['bootstrap'],exports:'angular' },
        ngRoute : { deps:['angular'] },
        app : { deps:['angular','ngRoute'] },
        controller:{ deps:['app'] },
        directive:{ deps:['app'] },
        provider:{ deps:['app'] }
    }
});

define([
    'app', 
    'controller', 
    'directive', 
    'provider'
],
function(app){
    // 앵귤러 실행
    angular.element(document).ready(function(){ 
        angular.bootstrap(document, ['app']); 
    });
});